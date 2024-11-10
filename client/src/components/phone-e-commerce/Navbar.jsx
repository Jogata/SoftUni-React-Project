import logo from "./assets/logo.svg"

export function Navbar() {
    return (
        <>
            <a href="#">
                <img src={logo} />
            </a>
            <h2 className="blue-text">navbar component</h2>
        </>
    )
}