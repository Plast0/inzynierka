import React, { FC, useState, useEffect } from "react";
import axios from '../API/axios';
import { isAxiosError } from "axios";
import useAuth from '../Hooks/useAuth'
import './LoginPage.css'
import { Link, useLocation, useNavigate } from "react-router-dom";

type UserProfile = {
    user: string;
    password: string;
    userName: string;
    id: number;
}

export const LoginPage: FC = () => {
    const { setAuthenticated, loginUser, setToken } = useAuth();
    const userRef = React.useRef<HTMLInputElement>(null);
    const errRef = React.useRef<HTMLInputElement>(null);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [user, setUser] = useState<string>('');
    const [pwd, setPwd] = useState<string>('');
    const [errMsg, setErrMsg] = useState<string>('');
    

    const getUserName = async (user:string, pwd: string) => {
        try{
            const usernamedata = await axios.get('/user/' + user);
            console.log("z getUserName " + usernamedata.data )            
            const tempUser: UserProfile = {
                user,
                password: pwd,
                userName: usernamedata.data.userName,
                id: usernamedata.data.id                
            }              
            console.log( tempUser)
            loginUser(tempUser);
            navigate(from, {replace: true})
        } catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        userRef.current?.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    },[user, pwd])

    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const response = await axios.post('/login', JSON.stringify({Email:user, Password: pwd}),{
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
        );  
            
            const accessToken = response?.data;
            setAuthenticated(true);
            
            setToken(accessToken);            
            setUser('');
            setPwd('');
            getUserName(user, pwd);
        } catch(err){
            if(isAxiosError(err)){
                if(!err?.response){
                    setErrMsg('Brak odpowiedzi serwera');
                } else if(err.response?.status === 400){
                    setErrMsg('Błędny adress email lub hasło');
            // } else if(err.response?.status === 401){
            //     setErrMsg('Unauthorized');
                }else{
                    setErrMsg('Logowanie się nie powiodło!');
                }
            //setErrMsg('Logowanie się nie powiodło!');
                errRef.current?.focus();
            }            
        }      
    }

    return(
        
        <div className="wrapper">
            <div className="loginform">          
            <form onSubmit={handleSubmit} >  
                <h1>Zaloguj się na konto</h1>               
                <div className="input-box">
                    <label htmlFor="emailaddress">Podaj swój adres email</label>
                <input 
                    type="text" 
                    id="emailaddress" 
                    ref={userRef} 
                    placeholder="Email"
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                    />
                </div>
                <div className="input-box">
                    <label htmlFor="password">Podaj swoje hasło</label>
                <input 
                    type="password" 
                    id="password"
                    placeholder="Password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                    />
                </div>
                <button type="submit" className="loginbutton">Login</button>
            </form>
            <p>Nie masz jeszcze konta, <Link to="/register">załóż go</Link></p>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive"> {errMsg} </p>
            </div>
        </div>       
    )
}
