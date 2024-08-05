import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function Logout() {
    const { logout } = useContext(AuthContext);
    // const navig = useNavigate();

    logout();
    // navig("/");

    return <Navigate to="/" />
}