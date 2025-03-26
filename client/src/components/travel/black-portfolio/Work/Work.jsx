import './work.css';
import img2 from '../images/sample1.jpeg';
import img1 from '../images/sample2.jpeg';
import img3 from '../images/sample3.jpeg';
import img4 from '../images/sample4.jpeg';

export function Work() {
    const works = [
        {
            image: img1,
            title: 'Responsive E-commerce Website',
            github: "#github",
            link: "#link",
        },
        {
            image: img2,
            title: 'SaaS Marketing Website',
            github: "#github",
            link: "#link",
        },
        {
            image: img3,
            title: 'Investement Website',
            github: "#github",
            link: "#link",
        },
        {
            image: img4,
            title: 'E-learning Website',
            github: "#github",
            link: "#link",
        },

    ]

    return (
        <div className="work-list" id='work'>
            <h2 className="work-header">Explore My Recent Works</h2>
            <div className="work-container">
                {works.map((work, index) => (
                    <div key={index} className="work">
                        <div className="work-content">
                            <h2>{work.title} </h2>
                            <div className="work-link">
                                <a href={work.github}> 
                                    <i className="fa fa-github"></i>
                                </a>
                                <a href={work.link}>
                                    <i className="fa fa-link"></i>
                                </a>
                            </div>
                        </div>
                        <div className="work-image">
                            <img src={work.image} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}