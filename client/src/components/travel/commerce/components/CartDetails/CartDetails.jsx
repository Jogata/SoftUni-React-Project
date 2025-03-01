export function CartDetails() {
    return (
        <>
            {/* <hr /> */}
            {/* <h1>cart details component</h1> */}
            {/* <hr /> */}
            <div className="cart-item">
                <div className="product-details">
                    <img src="\skyrim\equipment\armor\armor.png" alt="" />
                    <div className="product-info">
                        <h3>(title)</h3>
                        <button className="remove-btn">
                            Remove
                            <i className="ri-delete-bin-line"></i>
                        </button>
                    </div>
                </div>
                <div className="quantity">
                    <button>
                        <i className="fa fa-minus" aria-hidden="true"></i>
                    </button>
                    <span>(amount)</span>
                    <button>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                </div>
                <div className="price">
                    $ <span>(price)</span>
                </div>
                <div className="total">
                    (amount * price)
                </div>
            </div>
        </>
    )
}