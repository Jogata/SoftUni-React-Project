import { useContext } from "react";
import { useParams } from "react-router-dom"
import { Estates } from "../context/Estates";

export function EstateDetails() {
    const {id} = useParams();
    // console.log(id);
    const {filteredHouses} = useContext(Estates);
    // console.log(filteredHouses);

    const estate = filteredHouses.find(estate => estate.id === Number(id));
    // console.log(estate);
    // var estate = {
    //     id: 9, 
    //     name: "Lakeside Villa", 
    //     price: "300000", 
    //     country: "USA", 
    //     beds: 3, 
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.", 
    //     baths: 2, 
    //     image: "/src/components/travel/real-estate-hpg/images/villa2.jpg", 
    //     property: "Villa"
    // }

    return (
        <div className="estate-details-page">
            <div className="details-header">
                <h2 className="name">{estate.name}</h2>
                <p className="price">$ {estate.price}</p>
            </div>
            <h3 className="country">{estate.country}</h3>
            <hr />
            <div className="estate-features">
                <p className="feature">
                    <i className="fa fa-bed"></i>
                    {estate.beds} Beds
                </p>
                <p className="feature">
                    <i className="fa fa-bath"></i>
                    {estate.baths} Bathrooms
                </p>
                <p className="feature">
                    <i className="fa fa-university"></i>
                    {estate.property}
                </p>
            </div>
            <hr />
            <img className="estate-image" src={estate.image} alt="" />
            <div className="info-section">
                <h3>Property Description</h3>
                <div className="info-box">
                    <p>PROPERTY TYPE</p>
                    <h4>{estate.property}</h4>
                </div>
                <div className="info-box">
                    <p>STATUS</p>
                    <h4>Available</h4>
                </div>
                <div className="info-box">
                    <p>YEAR BUILT</p>
                    <h4>2020</h4>
                </div>
                <div className="info-box">
                    <p>PROPERTY ID</p>
                    <h4>BVDGYGAYAKAAHE567</h4>
                </div>
            </div>
            <hr />
            <p className="description">{estate.description}</p>
            <p className="description">{estate.description}</p>
            <p className="description">{estate.description}</p>
            <p className="description">{estate.description}</p>

            <div className="form">
                <p>Please fill the form for property inspection</p>
                <form>
                    <h2>Book An Inspection</h2>
                    <div className="input-box">
                        <label htmlFor="name">Full Name *</label>
                        <input type="text" name="name" id="name" placeholder="First Name" required />
                        <input type="text" name="surname" id="surname" placeholder="Last Name" required />
                    </div>
                    <div className="input-box">
                        <label htmlFor="email">Email *</label>
                        <input type="email" name="email" id="email" placeholder="example@gmail.com" required />
                    </div>
                    <div className="input-box">
                        <label htmlFor="message">Message</label>
                        <textarea 
                            name="message" 
                            id="message" 
                            cols="30" 
                            rows="10" 
                            placeholder="Hi, I'm interested in this property"
                        ></textarea>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}