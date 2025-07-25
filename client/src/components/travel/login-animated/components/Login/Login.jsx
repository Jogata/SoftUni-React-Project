// import "./login.css";

export function Login() {
    return (
        <div className="wrapper">
            <div className="titles">
                <div className="title login"></div>
                <div className="title register"></div>
            </div>
            <div className="forms">
                <div className="form-control">
                    <input type="radio" name="slide" id="login" defaultChecked />
                    <input type="radio" name="slide" id="register" />
                    <label htmlFor="login" className="label login">Login</label>
                    <label htmlFor="register" className="label register">Register</label>
                    <div className="slider-tab"></div>
                </div>

                <div className="form-details">
                    <form className="login">
                        <pre></pre>
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
                            <div className="btn-layer"></div>
                            <button type="submit">Login</button>
                        </div>
                        <div className="redirect">
                            <span>Don't have an account?</span>
                            <a href="#register">Register</a>
                        </div>
                    </form>

                    <form className="register">
                        <pre></pre>
                        <div className="field">
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="field">
                            <input type="text" placeholder="Email address" />
                        </div>
                        <div className="field">
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="field">
                            <input type="password" placeholder="Confirm password" />
                        </div>
                        <div className="submit-btn">
                            <div className="btn-layer"></div>
                            <button type="submit">Register</button>
                        </div>
                        <div className="redirect">
                            <span>Already have an account?</span>
                            <a href="#register">Login</a>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}