import { useState } from "react";
import "./auth.css";

export function AuthPage({initial}) {
    const [currentForm, setCurrentForm] = useState(initial);
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    const tabsAccessability = new Array(2).fill("false");
    tabsAccessability[currentTabIndex] = "true";

    const formsAccessability = {
        login: -1,
        register: -1
    }
    formsAccessability[currentForm] = 0;

    function switchForms(form, index) {
        setCurrentForm(form);
        setCurrentTabIndex(index);
    }

    return (
        <div className="crm-auth-page">
            <div className={`wrapper ${currentForm}`}>
                <div className="titles">
                    <div className="titles-details">
                        <p className="title login">Login</p>
                        <p className="title register">Register</p>
                    </div>
                </div>
                <div className="forms">
                    <div className="form-control" role="tablist" aria-label="Forms Tabs">
                        <button
                            role="tab" 
                            aria-selected={tabsAccessability[0]} 
                            aria-controls="login-form" 
                            id="login-form-tab" 
                            className="label login" 
                            onClick={() => switchForms("login", 0)} 
                        >
                            Login
                        </button>
                        <button
                            role="tab" 
                            aria-selected={tabsAccessability[1]} 
                            aria-controls="register-form" 
                            id="register-form-tab" 
                            className="label register" 
                            onClick={() => switchForms("register", 1)} 
                        >
                            Register
                        </button>
                    </div>

                    <div className="form-details">
                        <Login tabindex={formsAccessability.login} />
                        <Register tabindex={formsAccessability.register} />
                    </div>

                </div>
            </div>
        </div>
    )
}

function Login({ tabindex }) {
    return (
        <form 
            id="login-form" 
            className="login" 
            role="tabpanel" 
            tabIndex={tabindex} 
            aria-labelledby="login-form-tab"
        >
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

function Register({ tabindex }) {
    return (
        <form 
            id="register-form" 
            className="register-form" 
            role="tabpanel" 
            tabIndex={tabindex} 
            aria-labelledby="register-form-tab"
        >
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

// import facebook from "../../images/facebook-icon.png";
// import twitter from "../../images/twitter.png";
// import instagram from "../../images/instagram.png";

// export function Register() {
//     return (
//         <div className="container">
//             <div className="form-container">
//                 <div className="form-header">
//                     <h2>Sign Up for an account</h2>
//                     <p>Lets get you all set up so you can begin</p>
//                 </div>
//                 <div className="form-input">
//                     <form onSubmit={e => e.preventDefault()}>
//                         <div className="names">
//                             <div className="first-name">
//                                 <label htmlFor="name">First Name</label>
//                                 <input type="text" name="Name" />
//                             </div>
//                             <div className="last-name">
//                                 <label htmlFor="name">Last Name</label>
//                                 <input type="text" name="Name" />
//                             </div>
//                         </div>
//                         <div className="email">
//                             <label htmlFor="email">Email</label>
//                             <input type="email" name="email" />
//                         </div>
//                         <div className="password">
//                             <label htmlFor="pass">Password</label>
//                                 <input type="password" name="password" />
//                         </div>
//                         <div className="btn">
//                             <button type="submit">Register Now</button>
//                         </div>
//                     </form>
//                 </div>
//                 <div className="option">
//                     <p>or signup with</p>
//                     <div className="icons">
//                         <img src={facebook} alt="" />
//                         <img src={twitter} alt="" />
//                         <img src={instagram} alt="" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export function Login() {
//     return (
//         <div className="container">
//             <div className="form-container">
//                 <div className="form-header">
//                     <h2>Login</h2>
//                 </div>
//                 <div className="form-input">
//                     <form onSubmit={e => e.preventDefault()}>
//                         <div className="email">
//                             <label htmlFor="email">Email</label>
//                             <input type="email" name="email" />
//                         </div>
//                         <div className="password">
//                             <label htmlFor="pass">Password</label>
//                                 <input type="password" name="password" />
//                         </div>
//                         <div className="btn">
//                             <button type="submit">Login</button>
//                         </div>
//                     </form>
//                 </div>
//                 <div className="option">
//                     <p>or login with</p>
//                     <div className="icons">
//                         <img src={facebook} alt="" />
//                         <img src={twitter} alt="" />
//                         <img src={instagram} alt="" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }