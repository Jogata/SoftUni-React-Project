import { createContext, useState } from "react";
import { productsData } from "../data";

export const ShopContext = createContext();
export const ProductsContext = createContext();

export function ShopContextProvider({ children }) {
    const [ cart, setCart ] = useState([]);

    const itemsAmount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
    }, 0);

    const total = cart.reduce((accumulator, currentItem) => {
        const priceAsNumber = parseFloat(currentItem.price);
        if (isNaN(priceAsNumber)) {
            return accumulator;
        }
        return accumulator + priceAsNumber * currentItem.amount;
    }, 0);

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

        if (index >= 0) {
            increaseAmount(product.id);
        } else {
            const newItem = {...product, amount: 1};
            setCart([...cart, newItem])
        }

    }

    function increaseAmount(id) {
        const index = cart.findIndex(item => {
            return item.id === id;
        });

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

export function ProductsContextProvider({ children }) {
    const [ products, setProducts ] = useState(productsData);

    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
  )
}