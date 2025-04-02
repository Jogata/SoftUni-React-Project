export function Search() {
    return (
        <div className="search-bar">
            <div className="form">
                <div className="field">
                    {/* <i className="ri-map-pin-2-line"></i> */}
                    <i className="ri-map-pin-2-fill"></i>
                    <div className="options">
                        <p>Location (any)</p>
                        <select name="" id="">
                            <option value="">Select your place</option>
                            <option value="usa">USA</option>
                            <option value="canada">Canada</option>
                            <option value="uk">UK</option>
                        </select>
                    </div>
                </div>
                <div className="field">
                    <i className="fa fa-home"></i>
                    {/* <i className="fa fa-building-o"></i> */}
                    <div className="options">
                        <p>Property type (any)</p>
                        <select name="" id="">
                            <option value="default">Select your place</option>
                            <option value="apartment">Apartment</option>
                            <option value="villa">Villa</option>
                            <option value="house">House</option>
                        </select>
                    </div>
                </div>
                <div className="field">
                    {/* <i className="ri-money-dollar-circle-line"></i> */}
                    <i className="fa fa-usd"></i>
                    <div className="options">
                        <p>Price range (any)</p>
                        <select name="" id="">
                            <option value="default">Select price range</option>
                            <option value="200000">0-200000</option>
                            <option value="300000">200001-300000</option>
                            <option value="400000">300001-400000</option>
                        </select>
                    </div>
                </div>
                <button>
                    search
                    <i className="ri-search-line"></i>
                </button>
            </div>
        </div>
    )
}