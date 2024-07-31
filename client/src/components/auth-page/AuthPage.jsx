import "./auth-page.css";

import { useEffect, useState } from "react"

import { Link } from 'react-router-dom'

export default function AuthPage() {
  const [user, setUser] = useState({
    username: '', 
    password: '', 
  })

  useEffect(() => {
    getUserById("562f8422-88cc-47f9-b273-ed12a319d041");
    async function getUserById(id) {
      const data = await fetch(`http://localhost:3030/jsonstore/advanced/profiles/${id}`);
      const user = await data.json();
      console.log(user);
      // setUser(user);
    }
  }, [])

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  }

  const changeHandler = (e) => {
    setUser(oldData => ({
      ...oldData, 
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <div className="page full-screen auth-page">

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
            <li><a href="/auth" className="nav-link">login</a></li>
            <li><a href="/auth" className="nav-link">register</a></li>
            <li><a href="#" className="nav-link">logout</a></li>
          </ul>
        </nav>

        <main>
          <h1>Controlled Form</h1>
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
              />
            </div>

            <div>
              <input type="submit" value="Login" style={{cursor: "pointer"}} />
            </div>
          </form>
        </main>

      </div>
    </>
  )
}