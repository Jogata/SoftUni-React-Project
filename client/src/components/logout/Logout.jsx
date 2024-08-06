import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function Logout() {
    const { changeAuthState } = useContext(AuthContext);
    // const navig = useNavigate();

    useEffect(() => {
        changeAuthState({});
    }, [])

    // logout();
    // navig("/");

    return <Navigate to="/" />
}