import img from '../../images/img3.jpg';
import { about } from '../../data';
import './about.css';

export function About() {
    return (
        <div className="about" id='about'>
            <div className="left">
                <img src={img} alt="" />
            </div>
            <div className="right">
                <h3>About Us</h3>
                <h1>
                    We Give The Best Solution To Grow Up your business
                </h1>
                <p className="text">
                    We have all hands on deck to provide you
                    with the best service that suits your business
                </p>
                <div className="about-listing">
                    {about.map(({ number, head, text }, index) => {
                        return (
                            <div className="about-list" key={index}>
                                <div className="icon">
                                    <h2>{number}</h2>
                                    {/* <div className="design"></div> */}
                                </div>
                                <div className="list-txt">
                                    <h2>{head}</h2>
                                    <p>{text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}