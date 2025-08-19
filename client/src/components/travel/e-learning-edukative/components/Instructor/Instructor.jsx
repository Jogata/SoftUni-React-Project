import "./instructor.css";
import { services } from "../../data";

export function Services() {
    return (
        <div className="services" id="services">
            <h2 className="service-header">Our Services</h2>
            <p className="text">
                Our team of experts is dedicated to turn your vision 
                into reality with innovative and reliable technology
            </p>
            <div className="service-container">
                {services.map((service, index) => (
                    <div className="service-list" key={index}>
                        <div className="service-icon">
                            <h2 className="icon">
                                <i className={service.icon}></i>
                            </h2>
                        </div>
                        <h2>{service.head}</h2>
                        <p>{service.desc}</p>
                        <div className="action">
                            <p>{service.action}</p>
                            <span className={service.link}></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
    
// export function Instructor() {
//     return (
//         <div className="edukative-instructor-section">
//             <div className="edukative-instructor">
//                 <img src="https://raw.githubusercontent.com/Jogata/Front-end/refs/heads/main/Landing-Pages/Sports/img/soccer/cristiano-ronaldo.png" alt="" />
//             </div>
//             <div className="edukative-instructor-text">
//                 <h2>Become An Instructor</h2>
//                 <p>
//                     At Edukative, we believe that great instructors shape
//                     the future. Whether you're an industry expert, an experienced
//                     teacher, or a passionate professional, our platform gives you
//                     the tools and support to share your knowledge with learners
//                     around the world.
//                 </p>
//                 <p>
//                     Transform your knowledge into high-quality courses and reach 
//                     a global audience. Help students grow their skills, advance 
//                     their careers, or discover new passions.
//                 </p>
//                 <button>Apply Now</button>
//             </div>
//         </div>
//     )
// }