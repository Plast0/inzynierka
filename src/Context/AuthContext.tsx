import { createContext, ReactNode, useState } from "react";


type Props ={
    children?: ReactNode;
}
type UserProfile = {
    user: string;
    password: string;
    userName: string;
    id: number;
}
type IAuthContext = {
    user: UserProfile | null;
    token: string | null;
    authenticated: boolean;
    setAuthenticated: (newState: boolean) => void
    loginUser: (newState: UserProfile) => void;
    setToken: (token: string) => void;
}

const initialValue = {    
    authenticated: false,
    setAuthenticated: () => {}
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({children}: Props) => {

    const [authenticated, setAuthenticated] = useState(initialValue.authenticated);
    const [user, loginUser] = useState<UserProfile | null>(null);
    const [token, setToken] = useState<string | null>(null);
   
    
    return(
        <AuthContext.Provider value={{authenticated, setAuthenticated, user, loginUser, token, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider}