import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { login, logout, register } from "../api/auth-api";

export function useLogin() {
    const { changeAuthState } = useContext(AuthContext);

    const loginHandler = async (email, password) => {
        const { password: pass, ...data} = await login(email, password);
        changeAuthState(data);
        return data;
    }

    return loginHandler;
}

export function useRegister() {
    const { changeAuthState } = useContext(AuthContext);

    const registerHandler = async (email, password) => {
        const { password: pass, ...data} = await register(email, password);
        changeAuthState(data);
        // console.log(result);
        return data;
    }

    return registerHandler;
}

export function useLogout() {
    // const { changeAuthState } = useContext(AuthContext);
    // const navig = useNavigate();
    // console.log("logout");

    const logoutHandler = () => {
        // changeAuthState({});
        logout();
    }

    return logoutHandler;
}