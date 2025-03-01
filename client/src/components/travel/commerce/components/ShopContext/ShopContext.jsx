import { createContext, useState } from "react";
import { productsData } from "../../data"; 

export const ShopContext = createContext();

export function ShopContextProvider({children}) {
    const [products, setProducts] = useState(productsData);
    const [cart, setCart] = useState(productsData);
    // const [cart, setCart] = useState([]);

    return (
        <ShopContext.Provider value={{products, cart}}>
            {children}
        </ShopContext.Provider>
    )
}