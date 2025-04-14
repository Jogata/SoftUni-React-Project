import { createContext, useState } from "react";

import { productsData } from "../data";

export const ShopContext = createContext();

export function ShopContextProvider({children}) {
    const [products, setProducts] = useState(productsData);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [quantity, setQuantity] = useState(0);

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
    
    useEffect(() => {
        const total = cart.reduce((accumulator, currentItem) => {

            const priceAsNumber = parseFloat(currentItem.price);

            if (isNaN(priceAsNumber)) {
                return accumulator;
            }

            return accumulator + priceAsNumber * currentItem.amount;
        }, 0);

        // console.log("Total:", total);
        setTotal(total);
    }, [cart]);

    useEffect(() => {
        if (cart) {
          const amount = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.amount;
          }, 0);

        //   console.log("Quantity: ", amount);
          setQuantity(amount);
        }
      }, [cart]);
      
    return (
        <ShopContext.Provider value={products}>
            {children}
        </ShopContext.Provider>
    )
}