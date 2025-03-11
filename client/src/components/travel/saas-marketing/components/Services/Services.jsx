import './services.css';
import img1 from '../../images/analytic.jpg';
import img2 from '../../images/email.jpg';
import img3 from '../../images/lead.jpg';

export function Services() {
    const services = [
        {
            image: img1,
            title: 'Advanced Analytics',
            text: 'Make data-driven decisions with real-time insights. Track campaign performance, monitor ROI, and optimize your strategy with our comprehensive analytics suite. Our platform provides actionable data, enabling you to make informed decisions and optimize your campaigns on the fly for better engagement and higher conversion rates.',
        },
        {
            image: img2,
            title: 'Email Campaign Automation',
            text: 'This is the description for card 2.Send the right message at the right time with our powerful email automation tools. Personalize and schedule emails based on user behavior, ensuring maximum engagement. Our platform streamlines the process, allowing you to design, schedule, and automate campaigns without the need for extensive technical knowledge.',
        },
        {
            image: img3,
            title: 'Lead Scoring & Nurturing',
            text: 'Identify high-potential leads and nurture them through the sales funnel with automated workflows. Convert prospects into customers with minimal effort. High-scoring leads are prioritized and nurtured with targeted content, increasing the likelihood of conversion and maximizing your marketing ROI.',
        },
    ];

    return (
        <>
            <h2 className='title'>
                Transform Your Marketing Strategy With Our Services
            </h2>
            <div className="services">
                {services.map((service, index) => (
                    <div className="service" key={index}>
                        <div className="service-image">
                            <img
                                src={service.image} 
                                alt={service.title}
                            />
                        </div>
                        <div className="service-content">
                            <h2 className="service-title">
                                {service.title}
                            </h2>
                            <p className="service-text">
                                {service.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>

    );
};