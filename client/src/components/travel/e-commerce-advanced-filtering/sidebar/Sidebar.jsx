import "./sidebar.css";

export function Sidebar({ filterByCategory, filterByColor }) {
    return (
        <section className="sidebar">
            <div className="logo">
                <span><i className="fa fa-shopping-cart"></i></span>
            </div>

            <div className="filter-group">
                <h2 className="filter-title">Category</h2>
                <div>
                    <label className="filter-label-container">
                        <input
                            type="radio"
                            name="category"
                            onChange={(e) => filterByCategory(e.target.value)}
                            defaultChecked
                        />
                        <span className="checkmark"></span>All
                    </label>
                    <label className="filter-label-container">
                        <input
                            type="radio"
                            value="sneakers"
                            title="Sneakers"
                            name="category"
                            onChange={(e) => filterByCategory(e.target.value)}
                        />
                        <span className="checkmark"></span>Sneakers
                    </label>
                    <label className="filter-label-container">
                        <input
                            type="radio"
                            value="flats"
                            title="Flats"
                            name="category"
                            onChange={(e) => filterByCategory(e.target.value)}
                        />
                        <span className="checkmark"></span>Flats
                    </label>
                    <label className="filter-label-container">
                        <input
                            type="radio"
                            value="sandals"
                            title="Sandals"
                            name="category"
                            onChange={(e) => filterByCategory(e.target.value)}
                        />
                        <span className="checkmark"></span>Sandals
                    </label>
                    <label className="filter-label-container">
                        <input
                            type="radio"
                            value="heels"
                            title="Heels"
                            name="category"
                            onChange={(e) => filterByCategory(e.target.value)}
                        />
                        <span className="checkmark"></span>Heels
                    </label>
                </div>
            </div>

            <div className="filter-group">
                <h2 className="filter-title color-title">Colors</h2>
                <label className="filter-label-container">
                    <input
                        type="radio"
                        value="all"
                        name="color"
                        onChange={(e) => filterByColor(e.target.value)}
                        defaultChecked
                    />
                    <span className="checkmark all"></span>
                    All
                </label>
                <label className="filter-label-container">
                    <input
                        type="radio"
                        value="black"
                        title="Black"
                        name="color"
                        onChange={(e) => filterByColor(e.target.value)}
                    />
                    <span className="checkmark"></span>Black
                </label>
                <label className="filter-label-container">
                    <input
                        type="radio"
                        value="blue"
                        title="Blue"
                        name="color"
                        onChange={(e) => filterByColor(e.target.value)}
                    />
                    <span className="checkmark"></span>Blue
                </label>
                <label className="filter-label-container">
                    <input
                        type="radio"
                        value="red"
                        title="Red"
                        name="color"
                        onChange={(e) => filterByColor(e.target.value)}
                    />
                    <span className="checkmark"></span>Red
                </label>
                <label className="filter-label-container">
                    <input
                        type="radio"
                        value="green"
                        title="Green"
                        name="color"
                        onChange={(e) => filterByColor(e.target.value)}
                    />
                    <span className="checkmark"></span>Green
                </label>
                <label className="filter-label-container">
                    <input
                        type="radio"
                        value="white"
                        title="White"
                        name="color"
                        onChange={(e) => filterByColor(e.target.value)}
                    />
                    <span
                        className="checkmark"
                        style={{ background: "white", border: "2px solid black" }}
                    ></span>
                    White
                </label>
            </div>

            <div className="filter-group">
                <h2 className="filter-title price-title">Price</h2>

                <label className="sidebar-label-container">
                    <input type="radio" value="" name="test2" defaultChecked />
                    <span className="checkmark"></span>All
                </label>

                <input
                    type="radio"
                    value={50}
                    title="$0 - 50"
                    name="test2"
                />

                <input
                    type="radio"
                    value={100}
                    title="$50 - $100"
                    name="test2"
                />

                <input
                    type="radio"
                    value={150}
                    title="$100 - $150"
                    name="test2"
                />

                <input
                    type="radio"
                    value={200}
                    title="Over $150"
                    name="test2"
                />
            </div>

        </section>
    )
};
