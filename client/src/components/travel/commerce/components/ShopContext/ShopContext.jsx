import { createContext, useEffect, useState } from "react";
import { productsData } from "../../data"; 

export const ShopContext = createContext();

export function ShopContextProvider({children}) {
    const [products, setProducts] = useState(productsData);
    // const [cart, setCart] = useState(productsData);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [itemAmount, setItemAmount] = useState(0);

    useEffect(() => {
        // console.log(cart);
        const total = cart.reduce((acc, currentItem) => {
            const price = parseFloat(currentItem.price);
            if (isNaN(price)) {
                return acc;
            }
            return acc + price * currentItem.amount;
        }, 0);
        setTotal(total);
    }, [cart]);

    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((acc, currentItem) => {
                return acc + currentItem.amount;
            }, 0);
            setItemAmount(amount);
        }
    }, [cart]);

    function addToCart(product, id) {
        const newProduct = {...product, amount: 1};
        // console.log("added");
        // setCart(prev => [...prev, newProduct]);

        const cartItem = cart.find(item => {
            // console.log(id);
            return item.id === id;
        });

        if (cartItem) {
            const newCart = [...cart].map(item => {
                if (item.id === id) {
                    return {...item, amount: cartItem.amount + 1};
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            // console.log(newProduct);
            setCart([...cart, newProduct]);
        }
    }

    function removeFromCart(id) {
        const newCart = cart.filter(p => {
            return p.id !== id;
        });
        setCart(newCart);
    }

    function decreaseItemAmount(id) {
        const cartItem = cart.find(item => {
            return item.id === id;
        });
        // console.log(cartItem.amount);

        cartItem.amount = cartItem.amount - 1;
        // console.log(cartItem.amount);

        if (cartItem.amount == 0) {
            removeFromCart(id);
        } else {
            setCart([...cart]);
        }

        // if (cartItem) {
        //     const newCart = cart.map(item => {
        //         if (item.id === id) {
        //             return {...item, amount: cartItem.amount - 1};
        //         } else {
        //             return item;
        //         }
        //     })
        //     setCart(newCart);
        // } else {
        //     if (cartItem.amount < 2) {
        //         removeFromCart(id);
        //     }
        // }
    }

    function increaseItemAmount(id) {
        const cartItem = cart.find(item => {
            return item.id === id;
        });
        
        cartItem.amount = cartItem.amount + 1;
        // console.log(cartItem.amount);

        setCart([...cart]);
    }

    function clearCart() {
        setCart([]);
    }

    return (
        <ShopContext.Provider 
            value={{
                products, 
                cart, 
                addToCart, 
                removeFromCart, 
                decreaseItemAmount, 
                increaseItemAmount, 
                clearCart, 
                itemAmount, 
                total
            }}
        >
            {children}
        </ShopContext.Provider>
    )
}