import "./sidebar.css";

export function Sidebar() {
    return (
        <section className="sidebar">
            <div className="logo-container">
                <span><i className="fa fa-shopping-cart"></i></span>
            </div>

            <div>
                <h2 className="sidebar-title">Category</h2>
                <div>
                    <label className="sidebar-label-container">
                        <input type="radio" value="" name="test" defaultChecked />
                        <span className="checkmark"></span>All
                    </label>

                    <input
                        type="radio"
                        value="sneakers"
                        title="Sneakers"
                        name="test"
                    />
                    <input
                        type="radio"
                        value="flats"
                        title="Flats"
                        name="test"
                    />
                    <input
                        type="radio"
                        value="sandals"
                        title="Sandals"
                        name="test"
                    />
                    <input
                        type="radio"
                        value="heels"
                        title="Heels"
                        name="test"
                    />
                </div>
            </div>

            <div>
                <h2 className="sidebar-title color-title">Colors</h2>
                <label className="sidebar-label-container">
                    <input type="radio" value="" name="test1" defaultChecked />
                    <span className="checkmark all"></span>
                    All
                </label>

                <input
                    type="radio"
                    value="black"
                    title="Black"
                    name="test1"
                    color="black"
                />

                <input
                    type="radio"
                    value="blue"
                    title="Blue"
                    name="test1"
                    color="blue"
                />

                <input
                    type="radio"
                    value="red"
                    title="Red"
                    name="test1"
                    color="red"
                />

                <input
                    type="radio"
                    value="green"
                    title="Green"
                    name="test1"
                    color="green"
                />

                <label className="sidebar-label-container">
                    <input
                        type="radio"
                        value="white"
                        name="test1"
                    />
                    <span
                        className="checkmark"
                        style={{ background: "white", border: "2px solid black" }}
                    ></span>
                    White
                </label>
            </div>

            <div className="ml">
                <h2 className="sidebar-title price-title">Price</h2>

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
