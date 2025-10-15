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

    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount;
            }, 0);
            setItemsAmount(amount);
        }
    }, [cart]);

    function clearCart() {
        setCart([]);
    }

    return (
        <ShopContext.Provider value={{ products, cart, clearCart, itemsAmount }}>
            {children}
        </ShopContext.Provider>
  )
}