import { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../../images/logo.svg";

export class Navbar extends Component {
    render() {
        return (
            <div className="nav-component">
                <nav className="resort-nav">
                    <div className="flex-container">
                        <Link to="/" >
                            <img src={logo} alt="Home page" />
                        </Link>
                        <ul>
                            <Link to="/" >home</Link>
                            <Link to="/rooms" >rooms</Link>
                        </ul>
                    </div>
                    <button type="button" className="menu-btn">
                        <i className="fa fa-bars"></i>
                    </button>
                </nav>
            </div>
        )
    }
}