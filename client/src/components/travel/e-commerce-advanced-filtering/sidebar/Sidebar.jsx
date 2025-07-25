import "./sidebar.css";

export function Sidebar({ filterByCategory, filterByColor, filterByPrice }) {

    return (
        <section className="sidebar">
            <div className="logo">
                <span><i className="fa fa-shopping-cart"></i></span>
            </div>

            <div className="filter-group">
                <h2 className="filter-title">Category</h2>
                <div>
                    <label className="filter-label-container">
                        <div className="input">
                            <input
                                type="radio"
                                value="all"
                                name="category"
                                onChange={(e) => filterByCategory(e.target.value)}
                                defaultChecked
                            />
                            <span className="checkmark"></span>
                        </div>
                        All
                    </label>
                    <label className="filter-label-container">
                        <div className="input">
                            <input
                                type="radio"
                                value="sneakers"
                                title="Sneakers"
                                name="category"
                                onChange={(e) => filterByCategory(e.target.value)}
                            />
                            <span className="checkmark"></span>
                        </div>
                        Sneakers
                    </label>
                    <label className="filter-label-container">
                        <div className="input">
                            <input
                                type="radio"
                                value="flats"
                                title="Flats"
                                name="category"
                                onChange={(e) => filterByCategory(e.target.value)}
                            />
                            <span className="checkmark"></span>
                        </div>
                        Flats
                    </label>
                    <label className="filter-label-container">
                        <div className="input">
                            <input
                                type="radio"
                                value="sandals"
                                title="Sandals"
                                name="category"
                                onChange={(e) => filterByCategory(e.target.value)}
                            />
                            <span className="checkmark"></span>
                        </div>
                        Sandals
                    </label>
                    <label className="filter-label-container">
                        <div className="input">
                            <input
                                type="radio"
                                value="heels"
                                title="Heels"
                                name="category"
                                onChange={(e) => filterByCategory(e.target.value)}
                            />
                            <span className="checkmark"></span>
                        </div>
                        Heels
                    </label>
                </div>
            </div>

            <div className="filter-group colors">
                <h2 className="filter-title">Colors</h2>
                <label className="filter-label-container">
                    <div className="input">
                        <input
                            type="radio"
                            value="all"
                            name="color"
                            onChange={(e) => filterByColor(e.target.value)}
                            defaultChecked
                        />
                        <span className="checkmark white-dot all"></span>
                    </div>
                    All
                </label>
                <label className="filter-label-container">
                    <div className="input">
                        <input
                            type="radio"
                            value="black"
                            title="Black"
                            name="color"
                            onChange={(e) => filterByColor(e.target.value)}
                        />
                        <span className="checkmark white-dot" style={{ backgroundColor: "#000" }}></span>
                    </div>
                    Black
                </label>
                <label className="filter-label-container">
                    <div className="input">
                        <input
                            type="radio"
                            value="blue"
                            title="Blue"
                            name="color"
                            onChange={(e) => filterByColor(e.target.value)}
                        />
                        <span className="checkmark white-dot" style={{ backgroundColor: "blue" }}></span>
                    </div>
                    Blue
                </label>
                <label className="filter-label-container">
                    <div className="input">
                        <input
                            type="radio"
                            value="red"
                            title="Red"
                            name="color"
                            onChange={(e) => filterByColor(e.target.value)}
                        />
                        <span className="checkmark white-dot" style={{ backgroundColor: "red" }}></span>
                    </div>
                    Red
                </label>
                <label className="filter-label-container">
                    <div className="input">
                        <input
                            type="radio"
                            value="green"
                            title="Green"
                            name="color"
                            onChange={(e) => filterByColor(e.target.value)}
                        />
                        <span className="checkmark white-dot" style={{ backgroundColor: "green" }}></span>
                    </div>
                    Green
                </label>
                <label className="filter-label-container">
                    <div className="input">
                        <input
                            type="radio"
                            value="white"
                            title="White"
                            name="color"
                            onChange={(e) => filterByColor(e.target.value)}
                        />
                        <span
                            className="checkmark white-dot white"
                            style={{ backgroundColor: "white" }}
                        ></span>
                    </div>
                    White
                </label>
            </div>

            <div className="filter-group">
                <h2 className="filter-title price-title">Price</h2>

                <label className="filter-label-container">
                    <div className="input">
                        <input
                            type="radio"
                            value="all"
                            name="price"
                            onChange={(e) => filterByPrice(e.target.value)}
                            defaultChecked
                        />
                        <span className="checkmark"></span>
                    </div>
                    All
                </label>
                <label className="filter-label-container">
                    <div className="input">
                        <input
                            type="radio"
                            value={"0-50"}
                            title="$0 - $50"
                            name="price"
                            onChange={(e) => filterByPrice(e.target.value)}
                        />
                        <span className="checkmark"></span>
                    </div>
                    $0 - $50
                </label>
                <label className="filter-label-container">
                    <div className="input">
                        <input
                            type="radio"
                            value={"51-100"}
                            title="$50 - $100"
                            name="price"
                            onChange={(e) => filterByPrice(e.target.value)}
                        />
                        <span className="checkmark"></span>
                    </div>
                    $50 - $100
                </label>
                <label className="filter-label-container">
                    <div className="input">
                        <input
                            type="radio"
                            value={"101-150"}
                            title="$100 - $150"
                            name="price"
                            onChange={(e) => filterByPrice(e.target.value)}
                        />
                        <span className="checkmark"></span>
                    </div>
                    $100 - $150
                </label>
                <label className="filter-label-container">
                    <div className="input">
                        <input
                            type="radio"
                            value={"151"}
                            title="Over $150"
                            name="price"
                            onChange={(e) => filterByPrice(e.target.value)}
                        />
                        <span className="checkmark"></span>
                    </div>
                    Over $150
                </label>
            </div>

        </section>
    )
};