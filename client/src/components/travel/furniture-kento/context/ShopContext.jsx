import { createContext, useState } from "react";
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

    function clearCart() {
        setCart([]);
    }

    return (
        <ShopContext.Provider value={{ products, cart, clearCart }}>
            {children}
        </ShopContext.Provider>
  )
}