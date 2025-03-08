import { feedback } from '../../data';
import './feedback.css';

export function Feedback() {
    return (
        <div className="feedback">
            <h5>Here From Our Clients</h5>
            <h3>Here's what our satisfied clients have to say about our work</h3>
            <div className="customers">
                {feedback.map(({ image, icon, name, company, comment }, index) => {
                    return (
                        <div className="item" key={index}>
                            <div className="user">
                                <img src={image} alt="" />
                                <div className="info">
                                    <h5>{name}</h5>
                                    <p>{company}</p>
                                </div>
                            </div>
                            <div className="comment">
                                <i className={icon}></i>
                                <p>{comment}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}