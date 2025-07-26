// import "./login.css";

export function Login() {
    return (
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
    )
}