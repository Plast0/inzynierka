import { FC } from "react"
import './Komponent.css'

export const ScianaNosna: FC = () =>{
    return(
        <><p>Sciana Nosna</p>
        <select>
            <option>konstrukcja</option>
        </select>
        <input/>
        <br></br>
        <select>
        <option>ocieplenie</option>
        </select>
        <br></br>
        <select > 
            <option>wykończenie</option>
        </select>
        </>
    )
}