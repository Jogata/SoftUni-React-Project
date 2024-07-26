import "./nav.css";

export default function Nav() {
    return (
        <>
            <nav>
                <a href="#" className="logo">Logo</a>
                <ul className="nav-list">
                    <li><a href="./index.html">main</a></li>
                    <li className="sub-nav">
                        <span>games</span>
                        <ul>
                            <li><a href="./skyrim.html">skyrim</a></li>
                            <li><a href="#">the witcher</a></li>
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