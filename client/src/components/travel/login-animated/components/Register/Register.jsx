export function Register({ tabindex }) {
    return (
        <form className="register-form" id="register-form" role="tabpanel" tabIndex={tabindex} aria-labelledby="register-form-tab">
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
                <button type="submit">Register</button>
            </div>
            <div className="redirect">
                <span>Already have an account?</span>
                <a href="#login">Login</a>
            </div>
        </form>
    )
}