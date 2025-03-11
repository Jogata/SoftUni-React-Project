import './card.css';

export function Card() {
    const cards = [
        {
            id: 1,
            icon: "fa fa-bullhorn",
            title: 'Automated Campaign Setup',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, sit ac turpis venenatis.',
        },
        {
            id: 2,
            icon: "fa fa-refresh",
            title: 'Lead Scoring and Conversion',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, sit ac turpis venenatis.',
        },
        {
            id: 3,
            icon: "fa fa-user-o",
            title: 'Personalized Customer Journeys',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, sit ac turpis venenatis.',
        },
        {
            id: 4,
            icon: "ri-bar-chart-grouped-line",
            title: 'Real-Time Analytics and Optimization',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, sit ac turpis venenatis.',
        },
    ];

    return (
        <div className="cards">
            {cards.map((card) => (
                <div key={card.id} className="card">
                    <div className="card-icon">
                        <i className={card.icon}></i>
                    </div>
                    <div>
                        <h3 className="card-title">{card.title}</h3>
                        <p className="card-description">{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};