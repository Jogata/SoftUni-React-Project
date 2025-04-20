import { createContext, useEffect, useState } from "react";

import { productsData } from "../data";

export const ShopContext = createContext();

export function ShopContextProvider({children}) {
    const [products, setProducts] = useState(productsData);
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [filteredProducts, setFilteredProducts] = useState(productsData);

    const searchProducts = (query) => {
        if (query === "") {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter((product) =>
                product.title.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    };

    const addToCart = (product, id) => {
        const newItem = { ...product, amount: 1 };
        
        const cartItem = cart.find((item) => {
            return item.id == id;
        });
        // console.log(cartItem);
        
        if (cartItem) {
            // console.log("yes");
            const newCart = [...cart].map((item) => {
                if (item.id == id) {
                    return { ...item, amount: cartItem.amount + 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            // console.log("no");
            setCart([...cart, newItem]);
        }
    };
    
    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount;
            }, 0);
            
            setQuantity(amount);
        }
    }, [cart]);
    
    return (
        <ShopContext.Provider value={{
            products, 
            cart, 
            setCart, 
            addToCart, 
            quantity, 
            searchProducts, 
            filteredProducts
        }}>
            {children}
        </ShopContext.Provider>
    )
}