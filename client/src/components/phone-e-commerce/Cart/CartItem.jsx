export function CartItem({item, ctx}) {
    // console.log(item);
    const { id, img, title, price, total, count } = item;
    // console.log(id);
    const { increment, decrement, removeItem } = ctx;
    // console.log(ctx);
    return (
        <div className="flex-container cart-item">
            {/* <h2>cart item</h2> */}
            <div className="col">
                <img src={img} alt="product" />
            </div>
            <div className="col">
                <span className="col-name">product: </span>
                {title}
            </div>
            <div className="col">
                <span className="col-name">price: </span>
                ${price}
            </div>
            {/* <div className="col"> */}
                <div className="flex-container">
                    <button className="box" onClick={() => decrement(id)}>-</button>
                    <span className="value">{count}</span>
                    <button className="box" onClick={() => increment(id)}>+</button>
                </div>
            {/* </div> */}
            <div className="col">
                <button onClick={() => removeItem(id)} style={{marginBottom: "0"}}>
                    <i className="fa fa-trash"></i>
                </button>
            </div>
            <div className="col">
                <span className="col-name">total: </span>
                ${total}
            </div>
        </div>
    )
}