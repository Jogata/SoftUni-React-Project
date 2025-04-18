import { useContext } from 'react';
import { ShopContext } from '../../contexts/ShopContext';

export function CartDetails({ item }) {
    const { removeFromCart, increaseAmount, decreaseAmount } = useContext(ShopContext);
    const { id, title, image, price, amount } = item;

    return (
        <div className="cart-table-row">
            <div className="cart-item-info">
                <img src={image} alt={title} className="cart-item-image" />
                <div className="info">
                    <h3 className="cart-item-title">
                        <a href="">{title}</a>
                    </h3>
                    <button
                        className="delete-btn"
                        onClick={() => removeFromCart(id)}
                    >
                        <i className="fa fa-trash"></i>
                        remove
                    </button>
                </div>
            </div>
            <div className="quantity-buttons">
                <button
                    onClick={() => decreaseAmount(id)}
                    className=""
                >
                    decrease
                    <i className="fa fa-minus"></i>
                </button>
                <span className="quantity">{amount}</span>
                <button
                    onClick={() => increaseAmount(id)}
                    className=""
                >
                    increase
                    <i className="fa fa-plus"></i>
                </button>
            </div>
            <div className="">${price}</div>
            <div className="">
                {`$ ${parseFloat(price * amount).toFixed(2)}`}
            </div>
        </div>

    );
};