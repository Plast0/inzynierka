import { FC, useState } from "react";
import './Menu.css'
import Ikona from '../assets/IKONA UZYTKOWNIKA czarna.png'

export const Menu: FC = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdownMenu = () => setIsOpen(!isOpen);

    return(
        <div className="menu-container">
            <div className="menu-button" onClick={toggleDropdownMenu}>
                <img className="user-icon" src={Ikona} />
            </div>
            <div className={`menu-content ${isOpen ? 'show' : ''}` }>
                <a href="/">Home</a>
                <a href="/Wyniki">Wyniki</a>
                <a href="/Login">Wyloguj</a>
            </div>
        </div>
    )
}