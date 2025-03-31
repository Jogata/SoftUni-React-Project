export function Navbar() {
    return (
        <header>
            <a className="logo" href="/">HPG Properties</a>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/properties">Properties</a></li>
                    <li><a href="/mission">Mission</a></li>
                </ul>
            </nav>
            <button>Contact Us</button>
        </header>
    )
}