import lady1 from '../../images/laddy1.jpg';
import lady2 from '../../images/lady2.jpg';
import './feedback.css';

export function Feedback() {
    const feedback = [
        {
            image: lady1,
            icon: "fa fa-quote-right",
            name: 'Dianne Russell',
            company: 'Company',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
        },
        {
            image: lady2,
            icon: "fa fa-quote-right",
            name: 'Dianne Russell',
            company: 'Company',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
        },
        {
            image: lady1,
            icon: "fa fa-quote-right",
            name: 'Dianne Russell',
            company: 'Company',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
        },
    ];

    return (
        <div>
            <div className="feedback borders">
                <h5>Hear From Our Clients</h5>
                <div className="customers">
                    {feedback.map(({ image, icon, name, company, comment }, index) => {
                        return (
                            <div className="item" key={index}>
                                <div className="user">
                                    <img src={image} alt="" />
                                    <div className="info">
                                        <h5>{name} </h5>
                                        <p>{company} </p>
                                    </div>
                                </div>
                                <div className="comment">
                                    <h2><i className={icon}></i></h2>
                                </div>
                                <p>{comment} </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}