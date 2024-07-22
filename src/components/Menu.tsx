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
                {/* <a href="/">Home</a> */}
                <Link to="/">Home</Link>
                <a href="/Wyniki">Wyniki</a>
                {/* <a href="/Login">Wyloguj</a> */}
                <Link to="/Login">Wyloguj</Link>
            </div>
        </div>
    )
}