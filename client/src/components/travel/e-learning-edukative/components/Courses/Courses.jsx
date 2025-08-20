import "./courses.css";
// import { courses } from "../../data";
import { projects } from "../../data";
import { Link } from "react-router-dom";

export function Projects() {
    return (
        <div className="projects" id="projects">
            <div className="header">
                <div className="info">
                    <h3>Here are some of our latest projects</h3>
                </div>
                <button>Get In Touch</button>
            </div>
            <div className="project-items">
                {projects.map((project, index) => (
                    <div className="item" key={index}>
                        <img src={project.image} alt="" />
                        <div className="info">
                            <h4>{project.title}</h4>
                            <p>{project.text}</p>
                            <Link to={`/projects/${index}`}>View Project</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

// export function Courses() {
//     return (
//         <section className="edukative-course-container">
//             <h2>Explore Our Courses</h2>
//             <div className="edukative-courses-cards">
//                 {courses.map(course => (
//                     <div className="edukative-course-card" key={course.id}>
//                         <img src={course.image} alt="" />
//                         <div className="edukative-course-details">
//                             <div className="edukative-course-info">
//                                 <span><i className={course.icon}></i> 4.5</span>
//                                 <span>{course.student}</span>
//                             </div>
//                             <h3>{course.name}</h3>
//                             <p className="edukative-course-price">{course.price}</p>
//                             <Link to={`/course/${course.id}`}>View Details</Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     )
// }