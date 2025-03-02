import { createContext, useEffect, useState } from "react";
import { productsData } from "../../data"; 

export const ShopContext = createContext();

export function ShopContextProvider({children}) {
    const [products, setProducts] = useState(productsData);
    // const [cart, setCart] = useState(productsData);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const total = cart.reduce((acc, currentItem) => {
            const price = parseFloat(currentItem.price);
            if (isNaN(price)) {
                return acc;
            }
            return acc + price * currentItem.amount;
        }, 0);
        setTotal(total);
    }, [cart]);

    function addToCart(product, id) {
        const newProduct = {...product, amount: 1};
        // console.log(newProduct);
        setCart(prev => [...prev, newProduct]);
    }

    return (
        <ShopContext.Provider value={{products, cart, addToCart, total}}>
            {children}
        </ShopContext.Provider>
    )
}