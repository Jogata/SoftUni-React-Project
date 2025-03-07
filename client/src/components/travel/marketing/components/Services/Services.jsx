import { services } from '../../data';
import './services.css';

export function Services() {
    return (
        <div className="service" id='service'>
            <div className="service-header">
                <h1>Our Services</h1>
                <p>The service we offer is specifically designed to meet your needs</p>
            </div>
            <div className="service-container">
                {services.map(({ icon, head, desc, action, link }, index) => {
                    return (
                        <div className="service-list" key={index}>
                            <span className='icon'>
                                <i className={icon}></i>
                            </span>
                            <h2>{head}</h2>
                            <p>{desc}</p>
                            <div className="action">
                                <a href="#">
                                    <span>{action}</span>
                                    <i className={link}></i>
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}