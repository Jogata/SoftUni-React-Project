import { Context, createContext, useState } from "react";
import { productsData } from "../../data"; 

const ShopContext = createContext();

export function ShopContextProvider({children}) {
    const [products, setProducts] = useState(productsData);

    return (
        <ShopContext.Provider value={products}>
            {children}
        </ShopContext.Provider>
    )
}