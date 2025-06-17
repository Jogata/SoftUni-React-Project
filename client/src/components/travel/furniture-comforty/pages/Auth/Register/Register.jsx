import { Link, useNavigate } from "react-router-dom";
import "./register.css";

export function Register() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/");
    }

    return (
        <div className="register-page">

            <div className="register">

                <h3>Register </h3>

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Your Name..." />
                    <input type="email" placeholder="Your Email..." />
                    <input type="password" placeholder="Your Password..." />
                    <button type="submit">
                        <span>
                            Register <i className="fa fa-angle-double-right"></i>
                        </span>
                    </button>
                </form>
                <p>Already have an account? <Link to="/auth/login">Login</Link></p>
            </div>

        </div>
    );
};