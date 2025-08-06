import "./courses.css";
import { courses } from "../../data";

export function Courses() {
    return (
        <section className="edukative-course-container">
            <h2>Explore Our Courses</h2>
            <div className="edukative-courses-cards">
                {courses.map(course => (
                    <div className="edukative-course-card" key={course.id}>
                        <img src={course.image} alt="" />
                        <div className="edukative-course-details">
                            <div className="edukative-course-info">
                                <span><i className={course.icon}></i> 4.5</span>
                                <span>{course.student}</span>
                            </div>
                            <h3>{course.title}</h3>
                            <p className="edukative-course-price">{course.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}