import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useLogout } from "../../hooks/useAuth";
import { AuthContext } from "../../contexts/AuthContext";

export default function Logout() {
    const { changeAuthState } = useContext(AuthContext);
    // const navig = useNavigate();
    const logout = useLogout();
    logout();
    console.log(logout);

    useEffect(() => {
        changeAuthState({});
    }, [])

    // logout();
    // navig("/");

    return <Navigate to="/" />
}