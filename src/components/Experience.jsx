import { Building } from "./building";
import React from 'react';


export const Experience = ({onBuildingClick}) => {
    return(
        <>
        <ambientLight />
        <Building onClick={onBuildingClick}/>
        </>
    )
}
