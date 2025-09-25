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
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        let index = cart.findIndex(item => item.id == product.id);
        const newCart = [...cart];

        if (index === -1) {
            newCart.push({...product, amount: 0});
            index = newCart.length - 1;
        }

        newCart[index].amount += 1;
        console.log(newCart);

        setCart(newCart);
    }

    const deleteFromCart = (id) => {
        const filtered = cart.filter(item => item.id != id);
        setCart(filtered);
    }
    
    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{cart, addToCart, deleteFromCart, clearCart}}>
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