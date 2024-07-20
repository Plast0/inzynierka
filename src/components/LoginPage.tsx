import React, { useContext } from "react";
import { FC, useState, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from '../API/axios';

export const LoginPage: FC = () => {
    const { setAuthenticated } = useContext(AuthContext);
    const userRef = React.useRef<HTMLInputElement>(null);
    const errRef = React.useRef<HTMLInputElement>(null);

    const [user, setUser] = useState<string>('');
    const [pwd, setPwd] = useState<string>('');
    const [errMsg, setErrMsg] = useState<string>('');
    const [succes, setSucces] = useState(false);

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
            const accessToken = response?.data?.accessToklen;
            setAuthenticated(true);
            setUser('');
            setPwd('');
            navigate('/')
        } catch(err){
            // if(!err?.response){
            //     setErrMsg('No Server Response');
            // } else if(err.response?.starus === 400){
            //     setErrMsg('Missing Email or Password');
            // } else if(err.response?.status === 401){
            //     setErrMsg('Unauthorized');
            // }else{
            //     setErrMsg('login Fasilde');
            // }
            setErrMsg('login Fasilde');
            errRef.current?.focus();
        }
        

    }

    return(
        <>
        <div className="wrapper">            
            <h1>Zaloguj się na konto</h1>
            <form onSubmit={handleSubmit}>                
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
                <button type="submit">Login</button>
            </form>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive"> {errMsg} </p>
        </div>
        </>        
    )
}
