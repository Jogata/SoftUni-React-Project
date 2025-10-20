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

    const [ total, setTotal ] = useState(0);

    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount;
            }, 0);
            console.log('Amount:', amount);
            setItemsAmount(amount);
        }
    }, [cart]);

    useEffect(() => {
        const total = cart.reduce((accumulator, currentItem) => {
            const priceAsNumber = parseFloat(currentItem.price);
            if (isNaN(priceAsNumber)) {
                return accumulator;
            }
            return accumulator + priceAsNumber * currentItem.amount;
        }, 0);
        console.log('Total:', total);
        setTotal(total);
    }, [cart]);

    function removeItemFromCart(id) {
        const newCart = cart.filter((item) => {
            return item.id !== id;
        });
        setCart(newCart);
    }

    function addToCart(product) {
        // const newItem = { ...product, amount: 1 };
        // console.log(newItem)
        // console.log(`item ${product.title} added to cart`)

        // const cartItem = cart.find((item) => {
        //     return item.id === product.id;
        // });
        // console.log(cartItem);
        const index = cart.findIndex(item => {
            return item.id === product.id;
        });
        // console.log(index);

        // if (cartItem) {
        if (index >= 0) {
            // const product = products[index];
            // const newCart = [...cart];
            // const newItem = {...newCart[index]};
            // newItem.amount = newItem.amount + 1;
            // newCart[index] = newItem;
            // const newCart = [...cart].map(item => {
            //     if (item.id === product.id) {
            //         return { ...item, amount: cartItem.amount + 1 };
            //     } else {
            //         return item;
            //     }
            // });
            // setCart(newCart);
            increaseAmount(product.id);
        } else {
            const product = products[index];
            const newItem = {...product, amount: 1};
            setCart([...cart, newItem])
        }

    }
    // console.log(cart);

    function increaseAmount(id) {
        const index = cart.findIndex(item => {
            return item.id === id;
        });
        console.log(index);
        // const cartItem = cart.find((item) => item.id === id);
        // addToCart(cartItem);
        // const product = products[index];
        const newCart = [...cart];
        const newItem = {...newCart[index]};
        newItem.amount = newItem.amount + 1;
        newCart[index] = newItem;
        // const newCart = [...cart].map(item => {
        //     if (item.id === product.id) {
        //         return { ...item, amount: cartItem.amount + 1 };
        //     } else {
        //         return item;
        //     }
        // });
        setCart(newCart);
    }

    // function decreaseAmount(id) {
    //     const cartItem = cart.find((item) => {
    //         return item.id === id;
    //     });

    //     if (cartItem) {
    //         const newCart = cart.map((item) => {
    //             if (item.id === id) {
    //                 return { ...item, amount: cartItem.amount - 1 };
    //             } else {
    //                 return item;
    //             }
    //         });
    //         setCart(newCart);
    //     } else {
    //         if (cartItem.amount < 2) {
    //             removeItemFromCart(id);
    //         }
    //     }
    // }

    function decreaseAmount(id) {
        const index = cart.findIndex(item => {
            return item.id === id;
        });

        const newItem = {...cart[index]};
        newItem.amount = newItem.amount - 1;
        
        if (newItem.amount === 0) {
            removeItemFromCart(id);
        } else {            
            const newCart = [...cart];
            newCart[index] = newItem;
            setCart(newCart);
        }
    }

    function clearCart() {
        setCart([]);
    }

    return (
        <ShopContext.Provider value={{ products, cart, clearCart, itemsAmount, total, addToCart, increaseAmount, decreaseAmount, removeItemFromCart }}>
            {children}
        </ShopContext.Provider>
  )
}