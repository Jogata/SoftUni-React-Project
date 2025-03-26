import "./skills.css";
import figma from '../images/figma.svg';
import css from '../images/css.svg';
import html5 from '../images/html5.svg';
import php from '../images/php.svg';
import nodejs from '../images/nodejs.svg';
import mongodb from '../images/mongodb.svg';
import tailwindcss from '../images/tailwindcss.svg';
import visualstudio from '../images/visualstudio.svg';
import react from '../images/reactjs.svg';
import javascript from '../images/javascript.svg';

export function Skills() {
    return (
        <div className="skills">
            <h2>Skills and Tools</h2>
            <div className="skills-container">
                <div className="skills-img">
                    <div className="rel">
                        <img src={figma} alt="" />
                        <img src={tailwindcss} alt="" />
                        <img src={html5} alt="" />
                        <img src={css} alt="" />
                        <img src={php} alt="" />
                        <div className="abs">
                            <img src={figma} alt="" />
                            <img src={tailwindcss} alt="" />
                            <img src={html5} alt="" />
                            <img src={css} alt="" />
                            <img src={php} alt="" />
                        </div>
                    </div>
                </div>
                <div className="skills-img">
                    <div className="rel">
                        <img src={nodejs} alt="" />
                        <img src={mongodb} alt="" />
                        <img src={javascript} alt="" />
                        <img src={react} alt="" />
                        <img src={visualstudio} alt="" />
                        <div className="abs">
                            <img src={nodejs} alt="" />
                            <img src={mongodb} alt="" />
                            <img src={javascript} alt="" />
                            <img src={react} alt="" />
                            <img src={visualstudio} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}