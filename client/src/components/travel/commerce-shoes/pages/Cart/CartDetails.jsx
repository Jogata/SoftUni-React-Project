import { useContext } from 'react';
import { ShopContext } from '../../contexts/ShopContext';

export function CartDetails({ item }) {
    // const { removeFromCart, increaseAmount, decreaseAmount } = useContext(ShopContext);
    const { cart, setCart } = useContext(ShopContext);
    const { id, title, image, price, amount } = item;

    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => {
            return item.id !== id;
        });
        setCart(newCart);
    };

    const increaseAmount = (id) => {
        const cartItem = cart.find((item) => item.id === id);
        addToCart(cartItem, id);
    };

    const decreaseAmount = (id) => {
        const cartItemIndex = cart.findIndex((item) => {
            return item.id === id;
        });

        const cartItem = cart[cartItemIndex];

        if (cartItemIndex >= 0) {
            const newCart = [...cart];
            const newItem = { ...cartItem, amount: cartItem.amount - 1 };

            if (cartItem.amount <= 0) {
                removeFromCart(id);
            }
            else {
                newCart[cartItemIndex] = newItem;
                setCart(newCart);
            }
            // .map((item) => {
            //     if (item.id === id) {
            //         return { ...item, amount: cartItem.amount - 1 };
            //     } else {
            //         return item;
            //     }
            // });
        }
        // else {
        //     if (cartItem.amount < 2) {
        //         removeFromCart(id);
        //     }
        // }
    };

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