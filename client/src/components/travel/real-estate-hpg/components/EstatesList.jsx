import { properties } from "../data";

export function EstatesList() {
    return (
        <div className="estates">
            <div className="estates-header">
                <h2>Featured Properties</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, autem. In natus incidunt accusamus nesciunt eveniet iusto nulla adipisci perspiciatis illo veniam aliquid, voluptatibus officiis architecto labore deserunt enim ab expedita dolorum repellendus iure dignissimos et corrupti.</p>
            </div>
            <div className="estates-body">
                {properties.map(estate => {
                    return (
                        <div className="estate" key={estate.id}>
                            <div className="image">
                            <img src={estate.image} alt="" />
                            </div>
                            <div className="estate-info">
                                <p className="country">{estate.country}</p>
                                <h3 className="name"><a href="#">{estate.name}</a></h3>
                                <p className="price">$ {estate.price}</p>
                                <div className="features">
                                    <span>{estate.beds} Beds</span>
                                    <span>{estate.baths} Baths</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}