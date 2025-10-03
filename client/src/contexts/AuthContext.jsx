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

export const CoinContext = createContext();

const CoinContextProver = ({ children }) => {
    const [coins, setCoins] = useState([]);
    const [query, setQuery] = useState("");

    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    setCoins(data);
                    // console.log(data);
                }, 1000);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <CoinContext.Provider value={{ coins, query, setQuery }}>
            {children}
        </CoinContext.Provider>
    )
}

export default CoinContextProver;