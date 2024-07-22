import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

const useAuth = () =>{
    return useContext(AuthContext);
}

export default useAuth;