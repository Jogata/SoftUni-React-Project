import { Link, useNavigate } from "react-router-dom";
import "./login.css";

export function Login() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/');
    }

    return (
        <div className="login-page">

        <div className="login">

            <h3>Login</h3>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name..." />
                <input type="email" placeholder="Your Email..." />
                <input type="password" placeholder="Your Password..." />
                <button type="submit">
                    <span>
                        Login <i className="fa fa-angle-double-right"></i>
                    </span>
                </button>
            </form>
            <p>Dont't have an account? <Link to="/auth/register">Register</Link></p>
        </div>

    </div>
    );
};