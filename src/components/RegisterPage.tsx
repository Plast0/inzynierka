import React, { FC, useEffect, useState } from "react"
import axios from "../API/axios"
import { useLocation, useNavigate } from "react-router-dom";
import './RegisterPage.css'

export const RegisterPage: FC = () => {

    const userRef = React.useRef<HTMLInputElement>(null);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/login";

    const [email, setEmail] = useState<string>('')
    const [pwd, setPwd] = useState<string>('')
    const [confirmPwd, setConfirmPwd] = useState<string>('')
    const [userName, setUserName] = useState<string>('')
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')

    const registerUser = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try{
             const response = await axios.post("/register", JSON.stringify({Email:email, Password: pwd, UserName: userName, ConfirePassword: confirmPwd, FirstName: firstName, LastName: lastName }),{
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
             });
             console.log(response);
             setEmail('');
             setPwd('');
             setConfirmPwd('');
             setUserName('');
             setFirstName('');
             setLastName('');
             navigate(from, {replace: true})
        }catch(err){
            console.log(err);
        }        
    }

    useEffect(() => {
        userRef.current?.focus();
    }, [])

    return(
        <>
        <div className="wrapper">
            <div className="registerform">            
        <h1>Zarejestruj użytkownika</h1>
        <form onSubmit={registerUser}>
            <div className="input-box">
                <label htmlFor="emailaddress">Podaj swój adres email</label>
                <input 
                    type="text" 
                    id="emailaddress" 
                    ref={userRef} 
                    placeholder="Email"
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    />
            </div>
            <div className="input-box">
                <label htmlFor="username">Podaj swoją nazwę użytkownika</label>
                <input 
                    type="text" 
                    id="username"                    
                    placeholder="Nazwa uzytkownika"
                    autoComplete="off"
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                    required
                    />
            </div>
            <div className="input-box">
                    <label htmlFor="password">Podaj swoje hasło</label>
                <input 
                    type="password" 
                    id="password"
                    placeholder="Hasło"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                    />
            </div>
            <div className="input-box">
                    <label htmlFor="confirmpassword">Powtórz hasło</label>
                <input 
                    type="password" 
                    id="confirmpassword"
                    placeholder="Potwiedź hasło"
                    onChange={(e) => setConfirmPwd(e.target.value)}
                    value={confirmPwd}
                    required
                    />
            </div>            
            <div className="input-box">
                    <label htmlFor="firstname">Podaj swoje imię</label>
                <input 
                    type="text" 
                    id="firstname"
                    placeholder="Imię"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    required
                    />
            </div>            
            <div className="input-box">
                    <label htmlFor="lastname">Podaj swoje nazwisko</label>
                <input 
                    type="text" 
                    id="lastname"
                    placeholder="Nazwisko"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    required
                    />
            </div>
            <button type="submit" className="registerbutton">Załóż konto</button>
        </form>
        </div>
        </div>
        </>
    )
}