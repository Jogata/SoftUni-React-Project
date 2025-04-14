import { createContext, useState } from "react";

import { productsData } from "../data";

export const ShopContext = createContext();

export function ShopContextProvider({children}) {
    const [products, setProducts] = useState(productsData);
    const [cart, setCart] = useState([]);

    const addToCart = (product, id) => {
        const newItem = { ...product, amount: 1 };
        
        const cartItem = cart.find((item) => {
            return item.id === id;
        });
        
        if (cartItem) {
            const newCart = [...cart].map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount + 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            setCart([...cart, newItem]);
        }
    };
    
    return (
        <ShopContext.Provider value={products}>
            {children}
        </ShopContext.Provider>
    )
}