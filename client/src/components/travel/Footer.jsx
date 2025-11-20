import { useEffect, useState } from "react";

const printProps = (Component) => {
    return (props) => {
        console.log(props);
        return <Component {...props} />;
    };
};

const TodoList = ({ todo }) => {
    const { id, title } = todo || {};

    return todo ? (
        <div>
            <p>
                <strong>Todo ID:</strong> {id}
            </p>
            <h1>
                <strong>Todo Title:</strong> {title}
            </h1>
        </div>
    ) : (
        <p>Loading...</p>
    );
};

export const TodoListWrapped = printProps(TodoList);

const withLoading = (WrappedComponent) => {
    return function WithLoading({ isLoading, ...props }) {
        if (isLoading) {
            return <div>Loading...</div>;
        }
        return (
            <WrappedComponent {...props} />
        );
    };
};

const MyComponent = ({ data }) => {
    return <div>{data}</div>;
};

const MyComponentWithLoading = withLoading(MyComponent);

export function Test() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setData("Data fetched!");
            setIsLoading(false);
        }, 2000);
    }, []);

    return ( 
        <MyComponentWithLoading isLoading={isLoading} data={data} />
    );
}

const withTodo = (Component, todoId) => {
    return (props) => {
        const [todo, setTodo] = useState(null);

        useEffect(() => {
            (async () => {
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
                const data = await response.json();
                // console.log(data);
                setTodo(data);
            })();
        }, []);

        return (
            <Component {...props} todo={todo} />
        );
    };
}

export const TodoListWrapper = withTodo(TodoList, "2");

const withTodo2 = (Component) => {
    return ({todoId}) => {
        const [todo, setTodo] = useState(null);

        useEffect(() => {
            (async () => {
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
                const data = await response.json();
                console.log(data);
                setTodo(data);
            })();
        }, []);

        return (
            <Component todo={todo} />
        );
    };
}

export const TodoListWrapper2 = withTodo2(TodoList);

const UserComponent = ({
    message,
    userName,
    userPermissions,
  }) => {
    return (
      <div>
        <h1>{message}</h1>
        <p>Welcome, {userName}</p>
        <p>Your permissions: {userPermissions?.join(", ")}</p>
      </div>
    );
  };

  const NotAuthorized = () => (
    <div>You are not authorized to view this content.</div>
  );

const withAccessControl = (WrappedComponent, currentUserRole) => {
  return (props) => {
    const {
      roles,
      fallbackComponent: Fallback,
      injectedProps = {},
      ...restProps
    } = props;

    const hasAccess = roles.includes(currentUserRole);

    if (!hasAccess) {
      return <Fallback />;
    }

    const mergedProps = {
      ...restProps,
      ...injectedProps,
    };

    return <WrappedComponent {...mergedProps} />;
  };
};

export const UserComponentWithAccessControl = withAccessControl(UserComponent, "admin");

export function TestUser() {
    const injectedProps={
        userName: "John Doe",
        userPermissions: ["view_dashboard", "edit_settings"]
    }

    return (
        <UserComponentWithAccessControl 
            roles={["admin", "manager"]} 
            fallbackComponent={NotAuthorized} 
            injectedProps={injectedProps} 
            message="Hello, Admin!" 
        />
    )
}

export const WithoutCustomHook = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <ul className="todos">
            {data &&
                data.map((item) => {
                    return <p key={item.id}>{item.title}</p>;
                })}
        </ul>
    );
};

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error("Network response was not ok");
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Fetch error: ", error);
                setError(error);
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export const WithCustomHook = () => {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error fetching todos: {error.message}</p>;
    }

    return (
        <>
            <hr style={{margin: "2rem 0"}} />
            {data &&
                <ul className="todos">
                    {data.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            }
        </>
    );
};

export const PostsWithCustomHook = () => {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error fetching posts: {error.message}</p>;
    }

    return (
        <div className="posts">
            <hr style={{margin: "2rem 0"}} />
            <h2>Posts</h2>
            <ul>
                {data &&
                    data.map((post) => (
                        <li key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

// export function Footer() {
//     return (
//         <div className="footer">
//             <div className="footer-content">
//                 <div className="footer-name">
//                     <h2>Nika Shoes</h2>
//                 </div>
//                 <div className="footer-socials">
//                     <i className="fa fa-facebook footer-icon"></i>
//                     <i className="fa fa-instagram footer-icon"></i>
//                     <i className="fa fa-twitter footer-icon"></i>
//                 </div>
//             </div>
//             <div className="copy">
//                 <p>Copyright © Nika Shoes 2024. All rights reserved</p>
//             </div>
//         </div>
//     )
// }