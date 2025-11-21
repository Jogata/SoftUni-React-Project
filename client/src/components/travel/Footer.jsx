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

export function TestForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        console.log("Submitted:", { name, email });
    };

    return (
        <div style={{
            minHeight: "100vh", 
            padding: "3rem 1rem", 
            display: "flex"
        }}>
            {submitted ? (
                <h2 style={{margin: "auto"}}>
                    Thank you for submitting your information!
                </h2>
            ) : (
                <form 
                    onSubmit={handleSubmit} 
                    style={{
                        margin: "auto", 
                        padding: "2rem", 
                        display: "flex", 
                        gap: "1rem", 
                        flexDirection: "column", 
                        border: "1px solid #555", 
                        borderRadius: "12px"
                    }}
                >
                    <div>
                        <label>
                            Name:
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                // required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email:
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                // required
                            />
                        </label>
                    </div>
                    <button 
                        type="submit"
                        style={{
                            margin: "1rem auto 0", 
                            padding: "0.5rem 1.5rem", 
                            color: "white", 
                            border: "1px solid #555", 
                            borderRadius: "4em"
                        }}
                    >
                        Submit
                    </button>
                </form>
            )}
        </div>
    );
};

function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    function handleSubmit(e, callback) {
        e.preventDefault();
        setSubmitted(true);
        callback();
    };

    return { values, handleChange, handleSubmit, submitted };
};

export function TestFormWithCustomHook() {
    const { values, handleChange, handleSubmit, submitted } = useForm({
        name: "",
        email: "",
    });

    const onSubmit = () => {
        console.log("Submitted:", values);
    };

    return (
        <div style={{
            minHeight: "100vh", 
            padding: "3rem 1rem", 
            display: "flex"
        }}>
            {submitted ? (
                <h2 style={{margin: "auto"}}>
                    Thank you for submitting your information!
                </h2>
            ) : (
                <form 
                    onSubmit={
                        (e) => handleSubmit(e, onSubmit)
                    } 
                    style={{
                        margin: "auto", 
                        padding: "2rem", 
                        display: "flex", 
                        gap: "1rem", 
                        flexDirection: "column", 
                        border: "1px solid #555", 
                        borderRadius: "12px"
                    }}
                >
                    <div>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                            // required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                            // required
                            />
                        </label>
                    </div>
                    <button 
                        type="submit"
                        style={{
                            margin: "1rem auto 0", 
                            padding: "0.5rem 1.5rem", 
                            color: "white", 
                            border: "1px solid #555", 
                            borderRadius: "4em"
                        }}
                    >
                        Submit
                    </button>
                </form>
            )}
        </div>
    );
};

const useFormWithValidation = ({ initialValues, validate }) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        for (const field in validate) {
            const error = validate[field](values[field]);
            if (error) {
                isValid = false;
                newErrors[field] = error;
            }
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = callback => (e) => {
        e.preventDefault();
        if (validateForm()) {
            setSubmitted(true);
            callback();
        }
    };

    return { values, errors, handleChange, handleSubmit, submitted };
};

const validateEmail = (value) => {
    if (!value) return "Email is required";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) return "Email is invalid";
};

const validateName = (value) => {
    if (!value) return "Name is required";
    if (value.length < 2) return "Name must be at least 2 characters long";
};

export function TestFormWithValidation() {
    const { values, errors, handleChange, handleSubmit, submitted } = useFormWithValidation({
        initialValues: { name: "", email: "" },
        validate: {
            name: validateName,
            email: validateEmail,
        },
    });

    const onSubmit = () => {
        console.log("Submitted:", values);
    };

    return (
        <div style={{
            minHeight: "100vh", 
            padding: "3rem 1rem", 
            display: "flex"
        }}>
            {submitted ? (
                <h2 style={{ margin: "auto" }}>
                    Thank you for submitting your information!
                </h2>
            ) : (
                <form 
                    onSubmit={handleSubmit(onSubmit)} 
                    style={{
                        margin: "auto", 
                        padding: "2rem", 
                        display: "flex", 
                        gap: "1rem", 
                        flexDirection: "column", 
                        border: "1px solid #555", 
                        borderRadius: "12px"
                    }}
                >
                    <div>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                            />
                        </label>
                        {errors.name && (
                            <span style={{ color: "red" }}>{errors.name}</span>
                        )}
                    </div>
                    <div>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                            />
                        </label>
                        {errors.email && (
                            <span style={{ color: "red" }}>{errors.email}</span>
                        )}
                    </div>
                    <button 
                        type="submit"
                        style={{
                            margin: "1rem auto 0", 
                            padding: "0.5rem 1.5rem", 
                            color: "white", 
                            border: "1px solid #555", 
                            borderRadius: "4em"
                        }}
                    >
                        Submit
                    </button>
                </form>
            )}
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