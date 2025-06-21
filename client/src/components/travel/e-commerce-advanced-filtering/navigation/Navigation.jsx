import { useState } from "react";
import "./navigation.css";

export function Navigation({filter}) {
    const [value, setValue] = useState("");

    function handleOnChange(value) {
        setValue(value);
        filter(value);
    }

    return (
        <nav>
            <div className="nav-container">
                <input
                    className="search-input" 
                    type="text" 
                    value={value} 
                    onChange={(e) => handleOnChange(e.target.value)} 
                    placeholder="Enter your search shoes."
                />
            </div>
            <div className="profile-container">
                <a href="#">
                    <i className="fa fa-heart nav-icons"></i>
                </a>
                <a href="">
                    <i className="fa fa-shopping-cart nav-icons"></i>
                </a>
                <a href="">
                    <i className="fa fa-user-o nav-icons"></i>
                </a>
            </div>
        </nav>
    );
};