import { createContext, useState } from "react";

import usePersistedState from "../hooks/usePersistedState";
// import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({
    userID: "",
    email: "",
    accessToken: "",
    isAuthenticated: "",
    changeAuthState: () => null, 
    // logout: () => null,
});

export function AuthContextProvider(props) {
    const [authState, setAuthState] = usePersistedState("auth", {});

    const changeAuthState = (state) => {
        // localStorage.setItem("accessToken", state.accessToken);
        setAuthState(state);
    }

    // const logout = () => {
        // setAuthState({});
        // console.log(authState);
        // const navig = useNavigate();
        // navig("/");
    // }

    const contextData = {
        userID: authState._id,
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: Boolean(authState.email),
        changeAuthState, 
        // logout
    };

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    )
}

import { productsData } from "../components/travel/Header";

export const ProductsContext = createContext(null);
export const CartContext = createContext(null);

export function CartContextProvider(props) {
    // const [cart, setCart] = useState([]);
    productsData.map(p => p.amount = 2);
    // console.log(productsData);
    const [cart, setCart] = useState([...productsData]);
    // console.log(cart);

    const cartTotalItems = cart.reduce((acc, item) => acc + item.amount, 0);
    // console.log(cartTotalItems);

    const addToCart = (product) => {
        let index = cart.findIndex(item => item.id == product.id);
        const updatedCart = [...cart];
        // console.log(updatedCart[index].amount);

        if (index === -1) {
            updatedCart.push({...product, amount: 0});
            index = updatedCart.length - 1;
        }

        const currentProduct = updatedCart[index];
        const updatedProduct = {...currentProduct};
        updatedProduct.amount += 1;
        // console.log(updatedProduct);
        // updatedCart[index].amount += 1;
        updatedCart[index] = updatedProduct;
        // console.log(updatedCart[index].amount);
        // console.log(updatedCart);

        setCart(updatedCart);
    }

    const deleteFromCart = (id) => {
        const filtered = cart.filter(item => item.id != id);
        // console.log(filtered);
        setCart(filtered);
    }

    const incrementItemAmount = (id) => {
        const updatedCart = cart.map(item => {
            if (item.id == id) {
                return {...item, amount: item.amount + 1};
            } else {
                return item;
            }
        })

        setCart(updatedCart);
    }

    const decrementItemAmount = (id) => {
        const index = cart.findIndex(item => item.id == id);
        const item = cart[index];
        const newAmount = item.amount - 1;
        // console.log(newAmount);

        if (newAmount == 0) {
            // const filtered = cart.filter(item => item.id != id);
            // console.log(filtered);
            // setCart(filtered);
            deleteFromCart(id);
        } else {
            const updatedItem = {...item, amount: newAmount};
            const updatedCart = [...cart];
            updatedCart[index] = updatedItem;
            setCart(updatedCart);
        }
    }
    
    const clearCart = () => {
        setCart([]);
    }

    const cartContextValue = {
        cart, 
        cartTotalItems, 
        addToCart, 
        deleteFromCart, 
        clearCart, 
        incrementItemAmount, 
        decrementItemAmount
    };

    return (
        <CartContext.Provider value={cartContextValue}>
            {props.children}
        </CartContext.Provider>
    )
}

export function ProductsContextProvider(props) {
    const [products, setProducts] = useState(productsData);

    return (
        <ProductsContext.Provider value={{products}}>
            {props.children}
        </ProductsContext.Provider>
    )
}