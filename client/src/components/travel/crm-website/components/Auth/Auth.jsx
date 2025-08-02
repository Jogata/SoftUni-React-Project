import "./auth.css";
import facebook from "../../images/facebook-icon.png";
import twitter from "../../images/twitter.png";
import instagram from "../../images/instagram.png";

export function Login() {
    return (
        <div className="container">
            <div className="form-container">
                <div className="form-header">
                    <h2>Sign Up for an account</h2>
                    <p>Lets get you all set up so you can begin</p>
                </div>
                <div className="form-input">
                    <form action="#">
                        <div className="names">
                            <div className="first-name">
                                <label htmlFor="name">First Name</label>
                                <input type="text" name="Name" />
                            </div>
                            <div className="last-name">
                                <label htmlFor="name">Last Name</label>
                                <input type="text" name="Name" />
                            </div>
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" />
                        </div>
                        <div className="password">
                            <label htmlFor="pass">Password</label>
                                <input type="password" name="password" />
                        </div>
                        <div className="btn">
                            <button type="submit">Register Now</button>
                        </div>
                    </form>
                </div>
                <div className="option">
                    <p>or signup with</p>
                    <div className="icons">
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={instagram} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}