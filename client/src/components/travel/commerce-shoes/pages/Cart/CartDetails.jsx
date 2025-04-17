import { useContext } from 'react';
import { ShopContext } from '../../contexts/ShopContext';

export function CartDetails({ item }) {
    const { removeFromCart, increaseAmount, decreaseAmount } = useContext(ShopContext);
    const { id, title, image, price, amount } = item;

    return (
        <div className="">
            <div className="">
                <img src={image} alt={title} className="" />
                <div>
                    <h3 className="font-medium">
                        <a href="">{title}</a>
                    </h3>
                    <div
                        className=""
                        onClick={() => removeFromCart(id)}
                    >
                        <i className="fa fa-recycle-bin"></i>
                        Remove
                    </div>
                </div>
            </div>
            <div className="">
                <button
                    onClick={() => decreaseAmount(id)}
                    className=""
                >
                    remove
                </button>
                <span className="">{amount}</span>
                <button
                    onClick={() => increaseAmount(id)}
                    className=""
                >
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