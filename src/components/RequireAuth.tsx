import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth"

export const RequireAuth = () => {
    const { authenticated, token } = useAuth();
    const location = useLocation();
    return(        
        authenticated === true
        ? <div><Outlet />
            { console.log(authenticated, token) }
        </div>
        : <div>
            { console.log(authenticated, token ) }
            <Navigate to="/login" state= {{from: location}} replace />
            </div>
        
    );
}