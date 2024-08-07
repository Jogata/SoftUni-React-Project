import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const baseURL = "http://localhost:3030/users";

export const login = async (email, password) => {
    const response = await fetch(baseURL + "/login", {
        method: "post", 
        body: JSON.stringify({email, password})
    });

    if (!response.ok) {
        throw response;
    }

    const user = await response.json();

    return user;
}

export const register = async (email, password) => {
    const response = await fetch(baseURL + "/register", {
        method: "post", 
        body: JSON.stringify({email, password})
    });

    if (!response.ok) {
        console.log(response);
        throw response;
    }

    const user = await response.json();

    return user;
}

export const logout = async () => {
    const { accessToken } = useContext(AuthContext);
    console.log(accessToken);
  
    const response = await fetch(baseURL + "/logout", {
        headers: {
            "X-Authorization": accessToken,   
        }
    });
}