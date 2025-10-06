import { createContext, useEffect, useState } from "react";

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

import sneakers1 from "../components/travel/images/sneakers1.jpg";
import sneakers2 from "../components/travel/images/sneakers3.jpg";
import sneakers3 from "../components/travel/images/sneakers4.jpg";
import sneakers4 from "../components/travel/images/sneakers5.jpg";
import sneakers5 from "../components/travel/images/sneakers6.jpg";
import sneakers6 from "../components/travel/images/sneakers7.jpg";
import sneakers7 from "../components/travel/images/sneakers8.jpg";
import sneakers8 from "../components/travel/images/sneakers9.jpg";
import sneakers9 from "../components/travel/images/sneakers10.jpg";
import sneakers10 from "../components/travel/images/sneakers11.jpg";
import sneakers11 from "../components/travel/images/sneakers12.jpg";
import sneakers12 from "../components/travel/images/sneakers13.jpg";
import sneakers13 from "../components/travel/images/sneakers1.jpg";
import sneakers14 from "../components/travel/images/sneakers1.jpg";
import sneakers15 from "../components/travel/images/sneakers1.jpg";
import sneakers16 from "../components/travel/images/sneakers1.jpg";
import sneakers17 from "../components/travel/images/sneakers1.jpg";

export const productsData = [
    {
        id: 1,
        image: sneakers1,
        title: "Men Fashion Sneakers Athletic Shoe",
        price: 130,
        category: "ladies",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 2,
        image: sneakers2,
        title: "Men Fashion Sneakers Athletic Shoe",
        price: 130,
        category: "ladies",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 3,
        image: sneakers3,
        title: "Men Fashion Sneakers Athletic Shoe",
        price: 130,
        category: "ladies",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 4,
        image: sneakers4,
        title: "Men Fashion Sneakers Athletic Shoe",
        price: 130,
        category: "ladies",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 5,
        image: sneakers5,
        title: "Men Fashion Sneakers Athletic Shoe",
        price: 130,
        category: "ladies",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 6,
        image: sneakers6,
        title: "Men Fashion Sneakers Athletic Shoe",
        price: 130,
        category: "ladies",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 7,
        image: sneakers7,
        title: "Men Fashion Sneakers Athletic Shoe",
        price: 130,
        category: "ladies",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 8,
        image: sneakers8,
        title: "Men Fashion Sneakers Athletic Shoe",
        price: 130,
        category: "ladies",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 9,
        image: sneakers9,
        title: "Men Fashion Sneakers Athletic Shoe",
        price: 130,
        category: "ladies",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 10,
        image: sneakers10,
        title: "Men Fashion Sneakers Athletic Shoe",
        price: 130,
        category: "ladies",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 11,
        image: sneakers11,
        title: "Men Fashion Sneakers Athletic Shoe",
        price: 130,
        category: "ladies",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 12,
        image: sneakers12,
        title: "Men Fashion Sneakers Athletic Shoe",
        price: 130,
        category: "ladies",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 13,
        image: sneakers13,
        title: "Men Fashion Sneakers Athletic Shoe",
        price: 130,
        category: "ladies",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 14,
        image: sneakers14,
        title: "Men Fashion Sneakers Athletic Shoe",
        price: 130,
        category: "ladies",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 15,
        image: sneakers15,
        title: "Men Fashion Sneakers Athletic Shoe",
        price: 130,
        category: "ladies",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 16,
        image: sneakers16,
        title: "Men Fashion Sneakers Athletic Shoe",
        price: 130,
        category: "ladies",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 17,
        image: sneakers17,
        title: "Men Fashion Sneakers Athletic Shoe",
        price: 130,
        category: "ladies",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
]

export const ShopContext = createContext(null);

export function ShopContextProvider(props) {
    const [products, setPproducts] = useState(productsData);
    const [cart, setCart] = useState([]);

    function addToCart(product) {
        const newItem = {...product, amount: 1};
        // console.log(newItem);

        const cartItem = cart.find(item => {
            return item.id === product.id;
        })
        // console.log(cartItem);

        if (cartItem) {
            const newCart = [...cart].map(item => {
                if (item.id === product.id) {
                    const newItem = {...item, amount: item.amount + 1};
                    return newItem;
                } else {
                    return item;
                }
            })
            setCart(newCart);
        } else {
            setCart([...cart, newItem]);
        }
    }

    function removeItemFromCart(id) {
        const newCart = cart.filter(item => {
            return item.id !== id;
        })
        setCart(newCart);
    }

    function clearCart() {
        setCart([]);
    }

    return (
        <ShopContext.Provider value={{products, addToCart}}>
            {props.children}
        </ShopContext.Provider>
    )
}