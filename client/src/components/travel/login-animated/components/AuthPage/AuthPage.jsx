import { useState } from "react";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";

export function AuthPage() {
    const [currentForm, setCurrentForm] = useState("login");
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    // console.log(currentForm, currentTabIndex);

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
        <div className="page">
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