import { createContext, useEffect, useState } from "react";
import { productsData } from "../data";

const data = productsData.map(p => {
    console.log(p);
    p.amount = 2;
    return p;
});

export const ShopContext = createContext();

export function ShopContextProvider({ children }) {
    const [ products, setProducts ] = useState(productsData);

    const [ cart, setCart ] = useState(data);

    const [ itemsAmount, setItemsAmount ] = useState(0);

    const [ total, setTotal ] = useState(0);

    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount;
            }, 0);
            console.log('Amount:', amount);
            setItemsAmount(amount);
        }
    }, [cart]);

    useEffect(() => {
        const total = cart.reduce((accumulator, currentItem) => {
            const priceAsNumber = parseFloat(currentItem.price);
            if (isNaN(priceAsNumber)) {
                return accumulator;
            }
            return accumulator + priceAsNumber * currentItem.amount;
        }, 0);
        console.log('Total:', total);
        setTotal(total);
    }, [cart]);

    function removeItemFromCart(id) {
        const newCart = cart.filter((item) => {
            return item.id !== id;
        });
        setCart(newCart);
    }

    function addToCart(product) {
        const newItem = { ...product, amount: 1 };
        // console.log(newItem)
        // console.log(`item ${product.title} added to cart`)

        const cartItem = cart.find((item) => {
            return item.id === product.id;
        });
        console.log(cartItem);

        if (cartItem) {
            const newCart = [...cart].map(item => {
                if (item.id === product.id) {
                    return { ...item, amount: cartItem.amount + 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            setCart([...cart, newItem])
        }

    }
    console.log(cart);

    function increaseAmount(id) {
        const cartItem = cart.find((item) => item.id === id);
        addToCart(cartItem)
    }

    function clearCart() {
        setCart([]);
    }

    return (
        <ShopContext.Provider value={{ products, cart, clearCart, itemsAmount, total, addToCart, removeItemFromCart, increaseAmount }}>
            {children}
        </ShopContext.Provider>
  )
}