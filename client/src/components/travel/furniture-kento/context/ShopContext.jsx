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

    function clearCart() {
        setCart([]);
    }

    return (
        <ShopContext.Provider value={{ products, cart, clearCart, itemsAmount, total, removeItemFromCart }}>
            {children}
        </ShopContext.Provider>
  )
}