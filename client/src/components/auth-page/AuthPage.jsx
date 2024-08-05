import "./auth-page.css";

import { useEffect, useState } from "react"

import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "../../hooks/useForm";
import { useLogin, useRegister } from "../../hooks/useAuth";

export default function AuthPage(props) {
  const navigate = useNavigate();
  const login = useLogin();
  const register = useRegister();
  const [errors, setErrors] = useState("");
  
  const [ loginFormData, changeLoginFormHandler, submitLoginForm] = useForm(
    {"login-email": "", "login-password": ""}, 
    async (formData) => {
      const email = formData["login-email"];
      const password = formData["login-password"];
      try {
        await login(email, password);
        navigate("/");
      } catch (error) {
        const { message } = await error.json();
        // console.log(error.message);
        setErrors(message);
      }
    }
  )

  const [ registerFormData, changeRegisterFormHandler, submitRegisterForm] = useForm(
    {"register-email": "", "register-password": "", "repeat": ""}, 
    async (formData) => {
      const email = formData["register-email"];
      const password = formData["register-password"];
      const repeat = formData["repeat"];
      console.log(email, password, repeat);

      if (password != repeat) {
        setErrors("Passwords doesn't match");
        return;
      }

      try {
        await register(email, password);
        navigate("/");
      } catch (error) {
        const { message } = await error.json()
        // console.log(message);
        setErrors(message);
      }
    }
  )

  const { pathname } = useLocation();
  // console.log(pathname);
  const formClasses = {
    "/register": {
      "login": "flip-left", 
      "register": "move-forward"
    }, 
    "/login": {
      "register": "flip-right", 
      "login": "move-forward"
    }
  }

  return (
    <>
      <div className={`page ${props.classes}`}>

        <nav className="main-nav">
          <a href="#" className="logo skyrim-logo">
            <img src="/skyrim-favicon-192.png" alt="" />
          </a>
          <ul className="nav-list">
            <li><Link to='/' className="nav-link">main</Link></li>
            <li><Link to="/skyrim" className="nav-link">home</Link></li>
            <li className="sub-nav">
              <Link to="/skyrim-overview" className="nav-link">info</Link>
              <ul>
                <li><Link to="/skyrim-overview" className="nav-link">overview</Link></li>
                <li><a href="./skyrim-locations.html" className="nav-link">locations</a></li>
                <li><a href="./skyrim-equipment.html" className="nav-link">equipment</a></li>
                <li><a href="./skyrim-overview.html" className="nav-link">races</a></li>
                <li><a href="./skyrim-overview.html" className="nav-link">skills</a></li>
                <li><a href="./skyrim-overview.html" className="nav-link">spells</a></li>
                <li><a href="./skyrim-overview.html" className="nav-link">overview</a></li>
              </ul>
            </li>
            <li><a href="#" className="nav-link">contact</a></li>
            <li><Link to="/login" className="nav-link">login</Link></li>
            <li><Link to="/register" className="nav-link">register</Link></li>
            <li><a href="#" className="nav-link">logout</a></li>
          </ul>
        </nav>

        <main>

          <section className="page-content">
            <div className="wrapper">

              {/* <div className="form-container login flip-left"> */}
              <div className={`form-container login ${formClasses[pathname].login}`}>
                <h1 className="cursive">login</h1>
                <form onSubmit={submitLoginForm}>
                  <label htmlFor="login-email">
                    Username
                    <input 
                      type="email" 
                      name="login-email" 
                      id="login-email" 
                      value={loginFormData.email} 
                      onChange={changeLoginFormHandler}
                    />
                  </label>
                  <label htmlFor="login-password">
                    Password
                    <input 
                      type="password" 
                      name="login-password" 
                      id="login-password" 
                      value={loginFormData.password} 
                      onChange={changeLoginFormHandler}
                    />
                  </label>
                  <div className="forgot">
                    <a href="#forgot">forgot password?</a>
                  </div>
                  <button type="submit">login</button>
                  <div className="redirect">
                    <span>Don't have an account?
                      <Link to="/register">register</Link>
                    </span>
                  </div>
                </form>
              </div>

              {/* <div className="form-container register move-forward"> */}
              <div className={`form-container register ${formClasses[pathname].register}`}>
                <h1 className="cursive">register</h1>
                <form onSubmit={submitRegisterForm}>
                  <label htmlFor="register-username">
                    Username
                    <input 
                      type="text" 
                      name="register-email" 
                      id="register-email" 
                      value={registerFormData.email} 
                      onChange={changeRegisterFormHandler}
                    />
                  </label>
                  <label htmlFor="register-password">
                    Password
                    <input 
                      type="password" 
                      name="register-password" 
                      id="register-password" 
                      value={registerFormData.password} 
                      onChange={changeRegisterFormHandler}
                    />
                  </label>
                  <label htmlFor="repeat">
                    Repeat Password
                    <input 
                      type="password" 
                      name="repeat" 
                      id="repeat" 
                      value={registerFormData.repeat}
                      onChange={changeRegisterFormHandler}
                    />
                  </label>
                  <button type="submit">register</button>
                  <div className="redirect">
                    <span>Already have an account?
                      <Link to="/login">login</Link>
                    </span>
                  </div>
                </form>
              </div>

            </div>

            {errors && (
                <p className="error">
                  <span>{errors}</span>
                </p>
              )}

          </section>

          {/* <h1>Controlled Form</h1>
          <form onSubmit={submitForm}>
            <div>
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                name="username" 
                id="username" 
                value={user.username} 
                onChange={changeHandler}
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                name="password" 
                id="password" 
                value={user.password} 
                onChange={changeHandler} 
                autoFocus
              />
            </div>

            <div>
              <input type="submit" value="Login" style={{cursor: "pointer"}} />
            </div>
          </form> */}

        </main>

      </div>
    </>
  )
}