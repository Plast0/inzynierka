import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth"

export const RequireAuth = () => {
    const { authenticated } = useAuth();
    const location = useLocation();
    return(        
        authenticated === true
        ? <div><Outlet /></div>            
        : <div>
            <Navigate to="/login" state= {{from: location}} replace />
        </div>        
    );
}