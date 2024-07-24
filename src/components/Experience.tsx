//import { Building } from "./building";
import { FC } from 'react';
import { Building } from '../models/Building.js'
 
interface Experience {
    onBuildingClick: (meshType: string) => void
}


export const Experience: FC<Experience> = ({onBuildingClick}) => {
    return(
        <>
        <ambientLight />
        <Building onClick={onBuildingClick}/>
        </>
    )
}
