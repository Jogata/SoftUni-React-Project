export function Login({ tabindex }) {
    return (
        <form className="login" id="login-form" role="tabpanel" tabIndex={tabindex} aria-labelledby="login-form-tab">
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
                <button type="submit">Login</button>
            </div>
            <div className="redirect">
                <span>Don't have an account?</span>
                <a href="#register">Register</a>
            </div>
        </form>
    )
}