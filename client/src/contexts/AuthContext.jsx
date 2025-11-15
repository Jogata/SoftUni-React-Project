import { createContext, useState } from "react";

import usePersistedState from "../hooks/usePersistedState";
// import { useNavigate } from "r.eact-router-dom";

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


import bag1 from "../components/travel/images/bags/bag1.png";
import bag2 from "../components/travel/images/bags/bag2.jpg";
import bag3 from "../components/travel/images/bags/bag3.jpg";
import bag4 from "../components/travel/images/bags/bag4.jpg";
import bag5 from "../components/travel/images/bags/bag5.jpg";
import bag6 from "../components/travel/images/bags/bag6.png";
import bag7 from "../components/travel/images/bags/bag7.jpg";
import bag8 from "../components/travel/images/bags/bag8.jpg";

const bags = [
    {
        id: 1,
        image: bag1,
        title: "Elegant Ladies Shoulder Handbag",
        price: 130,
        category: "ladies",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 2,
        image: bag2,
        title: "Elegant Ladies Shoulder Handbag",
        price: 130,
        category: "ladies",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 3,
        image: bag3,
        title: "Elegant Ladies Shoulder Handbag",
        price: 130,
        category: "ladies",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 4,
        image: bag4,
        title: "Elegant Ladies Shoulder Handbag",
        price: 130,
        category: "ladies",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 5,
        image: bag5,
        title: "Elegant Ladies Shoulder Handbag",
        price: 130,
        category: "ladies",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 6,
        image: bag6,
        title: "Elegant Ladies Shoulder Handbag",
        price: 130,
        category: "ladies",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 7,
        image: bag7,
        title: "Elegant Ladies Shoulder Handbag",
        price: 130,
        category: "ladies",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 8,
        image: bag8,
        title: "Elegant Ladies Shoulder Handbag",
        price: 130,
        category: "ladies",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
]

export const CartContext = createContext();

export function CartContextProvider(props) {
    const [products] = useState(bags);

    const ctx = {
        products
    };

    return (
        <CartContext.Provider value={ctx}>
            {props.children}
        </CartContext.Provider>
    )
}