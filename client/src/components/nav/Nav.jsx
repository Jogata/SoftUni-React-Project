import "./nav.css";

import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <>
            <nav>
                <a href="#" className="logo">Logo</a>
                <ul className="nav-list">
                    <li><Link to='/'>main</Link></li>
                    <li className="sub-nav">
                        <span>games</span>
                        <ul>
                            <li><Link to='/skyrim'>skyrim</Link></li>
                            <li><Link to='/witcher'>the witcher</Link></li>
                            <li><a href="#">god of war</a></li>
                        </ul>
                    </li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">contact</a></li>
                    <li><a href="#">login</a></li>
                    <li><a href="#">register</a></li>
                    <li><a href="#">logout</a></li>
                </ul>
            </nav>
        </>
    )
}