import { Menu } from "./Menu"
import '../App.css'
import { UserResults } from "./UserResults"

export const Results = () => {
    return(
        <>
        <div className='menu-icon'>
        <p>Kalkulator współczynnika przenikania ciepła</p>
        <Menu />
        </div>
        <UserResults />
        </>
    )
}