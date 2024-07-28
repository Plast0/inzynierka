import { FC, useState } from "react";
import './Menu.css'
import Ikona from '../assets/IKONA UZYTKOWNIKA czarna.png'
import { Link } from "react-router-dom";


export const Menu: FC = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdownMenu = () => setIsOpen(!isOpen);

    return(
        <div className="menu-container">
            <div className="menu-button" onClick={toggleDropdownMenu}>
                <img className="user-icon" src={Ikona} />
            </div>
            <div className={`menu-content ${isOpen ? 'show' : ''}` }>                
                <Link to="/">Home</Link>
                <Link to ="/wyniki">Wyniki</Link>
                <Link to="/login">Wyloguj</Link>
            </div>
        </div>
    )
}