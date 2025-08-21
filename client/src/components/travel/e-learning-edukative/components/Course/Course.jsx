import "./course.css";
// import { courses } from "../../data";
import { feedback } from "../../data";
import { useParams } from "react-router-dom";

export function Feedback() {
    return (
        <div className="feedback">
            <h5>Hear From Our Clients</h5>
            <h3>Here's what our satisfied clients have to say about our work</h3>
            <div className="customers">
                {feedback.map((feed, index) => (
                    <div className="item" key={index}>
                        <div className="user">
                            <img src={feed.image} alt="" />
                            <div className="info">
                                <h5>{feed.name}</h5>
                                <p>{feed.company}</p>
                            </div>
                        </div>
                        <div className="comment">
                            <span><i className={feed.icon}></i></span>
                        </div>
                        <p>{feed.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

// export function Course() {
//     const { id } = useParams();
//     const course = courses.find(course => course.id === Number(id));

//     return (
//         <div className="course edukative-course-details">
//             <div className="edukative-details-header">
//                 <div className="edukative-details-image">
//                     <img src={course.image} alt="" />
//                 </div>
//                 <div className="edukative-details-text">
//                     <h1>{course.name}</h1>
//                     <p className="edukative-details-desc">{course.courseDetail.description}</p>
//                     <span className="edukative-details-lang">{course.standard}</span>
//                     <div className="edukative-details-date">{course.courseDetail.date}</div>
//                     <div className="edukative-details-price">{course.price}</div>
//                     <button>Apply Now</button>
//                 </div>
//             </div>
//         </div>
//     )
// }