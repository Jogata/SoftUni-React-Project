import './about.css';
import img from '../../images/about.jpg';

export function About() {
    const aboutList = [
        {
            icon: "fa fa-check-circle",
            title: 'Software Development & Design',
        },
        {
            icon: "fa fa-check-circle",
            title: 'Cloud Computing Solutions',
        },
        {
            icon: "fa fa-check-circle",
            title: 'Software Consulting',
        },
        {
            icon: "fa fa-check-circle",
            title: 'Web development',
        },
        {
            icon: "fa fa-check-circle",
            title: 'App Development',
        },
        {
            icon: "fa fa-check-circle",
            title: 'Graphic Design',
        }
    ];

    return (
        <div>
            <div className="about borders" id="about">
                <div className="left-side">
                    <img src={img} alt="about-img" />
                </div>
                <div className="right-side">
                    <h2 className="right-header">About Us</h2>
                    <p>A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides</p>

                    {aboutList.map(({ icon, title }, index) => {
                        return (
                            <div className="list-container" key={index}>
                                <div className="list">
                                    <h2 className="icon">
                                        <i className={icon}></i>
                                    </h2>
                                    <p>{title}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}