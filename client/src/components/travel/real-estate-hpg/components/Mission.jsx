import villa2 from '../images/villa2.jpg';

export function Mission() {
    return (
        <div className="mission" id="mission">
            <div className="image">
                <img src={villa2} alt="" />
            </div>
            <div className="text">
                <h2>Invest In Your Future Home With The Best</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, 
                    voluptatem sequi. Autem iusto similique perspiciatis possimus 
                    commodi, atque nobis in aliquam quibusdam a expedita. Ratione, 
                    quas dicta enim repellat voluptates praesentium sit distinctio.
                </p>
                <button>Book an inspection</button>
            </div>
        </div>
    )
}