import { useState } from "react";

export function Navigation() {
    const [Mobile, setMobile] = useState(false);

    const iconClasses = Mobile ? "fa fa-times close" : "fa fa-bars open";
    const navClasses = Mobile ? "nav-links" : "links";

    return ( 
        <div>
            <div className="navigation">
                <div className="nav-logo">
                    <h2>CREVA</h2>
                </div> 
                <div className={navClasses} onClick={() => setMobile(false)}>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>
                </div> 
                <div className="button">
                    <button>Booking</button>
                </div>
                <button className="toggle" onClick={() => setMobile(!Mobile)}>
                    <i className={iconClasses}></i>
                </button>
            </div> 
        </div> 
    ) 
} 

// export function Footer() {
//     return (
//         <div className="footer">
//             <div className="footer-content">
//                 <div className="footer-name">
//                     <h2>Nika Shoes</h2>
//                 </div>
//                 <div className="footer-socials">
//                     <i className="fa fa-facebook footer-icon"></i>
//                     <i className="fa fa-instagram footer-icon"></i>
//                     <i className="fa fa-twitter footer-icon"></i>
//                 </div>
//             </div>
//             <div className="copy">
//                 <p>Copyright © Nika Shoes 2024. All rights reserved</p>
//             </div>
//         </div>
//     )
// }