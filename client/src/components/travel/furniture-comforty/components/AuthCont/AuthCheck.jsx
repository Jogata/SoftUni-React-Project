import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { userContext } from "./AuthCont";

const AuthCheck = ({children}) => {
    const {user} = useContext(userContext);
    // console.log(user);

    const isAuthenticate = Boolean(user?.name);
    
    const location = useLocation();

    if(!isAuthenticate) {
        return <Navigate to='/auth/login' state={
            {
                from: location
            }
        } />
    }

    return children;

};

export default AuthCheck;