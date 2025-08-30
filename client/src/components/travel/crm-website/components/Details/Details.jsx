import "./details.css";
import { details } from "../../data";
// import image from "../../images/details.jpg";
import image from "../../images/clean/cleaner 3.jpg";

export function Details() {
    return (
        <section className="details">
            <div className="left-details">
                <img src={image} alt="" />
            </div>
            <div className="right-details">
                <h2 className="right-header">
                    Why Work With Us?
                </h2>
                <div className="box-container">
                    {
                        details.map((detail, index) => (
                            <div className="box" key={index}>
                                <div className="detail-icon-container">
                                    <span className="detail-icon">
                                        <i className={detail.icon}></i>
                                    </span>
                                </div>
                                <h3 className="detail-head">{detail.head}</h3>
                                <p className="text">{detail.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

// export function Details() {
//     return (
//         <section className="details">
//             <div className="details-image">
//                 <img src={image} alt="" />
//             </div>
//             <div className="details-text">
//                 <h2>Menage your customers relationship effortlessly with our tool</h2>
//                 <div className="details">
//                     {
//                         details.map((detail, index) => (
//                             <div className="detail" key={index}>
//                                 <div className="icon">
//                                     <i className={detail.icon}></i>
//                                 </div>
//                                 <h3>{detail.head}</h3>
//                                 <p>{detail.desc}</p>
//                             </div>
//                         ))
//                     }
//                 </div>
//             </div>
//         </section>
//     )
// }