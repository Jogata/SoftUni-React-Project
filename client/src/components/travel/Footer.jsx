export function Navbar() { 
    return ( 
        <>
            <div className="navigation">
                <div className="logo">
                    <h2>Derek</h2>
                </div> 
                <div className="links">
                    <ul> 
                        <li>About</li>
                        <li>Projects</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul> 
                </div> 
                <div className="button">
                    <button>Hire Me</button>
                </div> 
            </div> 
        </> 
    ) 
} 

export default Navbar

// export function Footer() {
//     return (
//         <footer>
//             <h1>footer component</h1>
//         </footer>
//     )
// }