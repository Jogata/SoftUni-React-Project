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

    // const [ itemsAmount, setItemsAmount ] = useState(0);
    const itemsAmount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
    }, 0);
    console.log('Amount:', itemsAmount);
    // setItemsAmount(amount);

    // const [ total, setTotal ] = useState(0);

    const total = cart.reduce((accumulator, currentItem) => {
        const priceAsNumber = parseFloat(currentItem.price);
        if (isNaN(priceAsNumber)) {
            return accumulator;
        }
        return accumulator + priceAsNumber * currentItem.amount;
    }, 0);
    console.log('Total:', total);
    // setTotal(total);

    // useEffect(() => {
    //     if (cart) {
    //         const amount = cart.reduce((accumulator, currentItem) => {
    //             return accumulator + currentItem.amount;
    //         }, 0);
    //         console.log('Amount:', amount);
    //         setItemsAmount(amount);
    //     }
    // }, [cart]);

    // useEffect(() => {
    //     const total = cart.reduce((accumulator, currentItem) => {
    //         const priceAsNumber = parseFloat(currentItem.price);
    //         if (isNaN(priceAsNumber)) {
    //             return accumulator;
    //         }
    //         return accumulator + priceAsNumber * currentItem.amount;
    //     }, 0);
    //     console.log('Total:', total);
    //     setTotal(total);
    // }, [cart]);

    function removeItemFromCart(id) {
        const newCart = cart.filter((item) => {
            return item.id !== id;
        });
        setCart(newCart);
    }

    function addToCart(product) {
        const index = cart.findIndex(item => {
            return item.id === product.id;
        });
        // console.log(index);

        if (index >= 0) {
            increaseAmount(product.id);
        } else {
            // const product = products[index];
            const newItem = {...product, amount: 1};
            setCart([...cart, newItem])
        }

    }

    function increaseAmount(id) {
        const index = cart.findIndex(item => {
            return item.id === id;
        });
        // console.log(index);

        const newCart = [...cart];
        const newItem = {...newCart[index]};
        newItem.amount = newItem.amount + 1;
        newCart[index] = newItem;
        setCart(newCart);
    }

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

    const context = {
        products, 
        cart, 
        itemsAmount, 
        total, 
        addToCart, 
        increaseAmount, 
        decreaseAmount, 
        removeItemFromCart,
        clearCart
    }

    return (
        <ShopContext.Provider value={context}>
            {children}
        </ShopContext.Provider>
  )
}