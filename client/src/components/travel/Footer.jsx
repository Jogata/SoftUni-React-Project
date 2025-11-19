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