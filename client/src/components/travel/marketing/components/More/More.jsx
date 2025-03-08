import { more } from '../../data';
import img from '../../images/img2.jpg';
import './more.css';

export function More() {
    return (
        <div className="more">
            <div className="more-left">
                {more.map(({ head, desc }, index) => {
                    return (
                        <div className="left-content" key={index}>
                            <h1>{head}</h1>
                            <p>{desc}</p>
                            <a href="#contact">Learn More</a>
                        </div>
                    )
                })}
            </div>
            <div className="more-right">
                <img src={img} alt="" />
            </div>
        </div>
    )
}