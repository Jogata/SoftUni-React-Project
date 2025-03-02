import { createContext, useEffect, useState } from "react";
import { productsData } from "../../data"; 

export const ShopContext = createContext();

export function ShopContextProvider({children}) {
    const [products, setProducts] = useState(productsData);
    // const [cart, setCart] = useState(productsData);
    const [cart, setCart] = useState([]);

    function addToCart(product, id) {
        const newProduct = {...product, amount: 1};
        // console.log(newProduct);
        setCart(prev => [...prev, newProduct]);
    }

    return (
        <ShopContext.Provider value={{products, cart, addToCart}}>
            {children}
        </ShopContext.Provider>
    )
}