// import "./login.css";

import { Register } from "../Register/Register";

export function Login() {
    return (
        <div className="page">
        <div className="wrapper login">
            <div className="titles">
                <p className="title login">Login</p>
                <p className="title register">Register</p>
            </div>
            <div className="forms">
                <div className="form-control" role="tablist" aria-label="Forms Tabs">
                    {/* <input type="radio" name="slide" id="login" defaultChecked /> */}
                    {/* <input type="radio" name="slide" id="register" /> */}
                    {/* <label htmlFor="login" className="label login">Login</label> */}
                    {/* <label htmlFor="register" className="label register">Register</label> */}
                    <button 
                        role="tab" 
                        aria-selected="true" 
                        aria-controls="login-form" 
                        id="login-form-tab" 
                        className="label login" 
                    >
                        Login
                    </button>
                    <button 
                        role="tab" 
                        aria-selected="false" 
                        aria-controls="register-form" 
                        id="register-form-tab" 
                        className="label register" 
                    >
                        Register
                    </button>
                    {/* <div className="slider-tab"></div> */}
                </div>

                <div className="form-details">
                    <form className="login" id="login-form" role="tabpanel" tabindex="0" aria-labelledby="login-form-tab">
                        {/* <pre></pre> */}
                        <div className="field">
                            <input type="text" placeholder="Email address" />
                        </div>
                        <div className="field">
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="reset">
                            <a href="#reset">Forgot password ?</a>
                        </div>
                        <div className="submit-btn">
                            {/* <div className="btn-layer"></div> */}
                            <button type="submit">Login</button>
                        </div>
                        <div className="redirect">
                            <span>Don't have an account?</span>
                            <a href="#register">Register</a>
                        </div>
                    </form>
                    <Register />
                </div>

            </div>
        </div>
        </div>
    )
}