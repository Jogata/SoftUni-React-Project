import "./course.css";
import { courses } from "../../data";
import { useParams } from "react-router-dom";

export function Course() {
    const { id } = useParams();
    const course = courses.find(course => course.id === Number(id));

    return (
        <div className="course edukative-course-details">
            <div className="edukative-details-header">
                <div className="edukative-details-image">
                    <img src={course.image} alt="" />
                </div>
                <div className="edukative-details-text">
                    <h1>{course.name}</h1>
                    <p className="edukative-details-desc">{course.courseDetail.description}</p>
                    <span className="edukative-details-lang">{course.standard}</span>
                    <div className="edukative-details-date">{course.courseDetail.date}</div>
                    <div className="edukative-details-price">{course.price}</div>
                    <button>Apply Now</button>
                </div>
            </div>
        </div>
    )
}