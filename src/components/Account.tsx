import axios, { AxiosResponse } from "axios"
import { FC, useEffect, useState } from "react"

type Envelop = {
    id: number;
    name: string;
    valueU: number;
    material: Structure[];
}

type Structure = {
    id: string;
    name: string;
    lambda: number;
    thicness: number;
  };

export const Account:FC = () => {

    const [buildingEnvelope, setBuildingEnvelope] = useState<Envelop[] | null>([])
    const fetchData = async () =>{
        try{
            const response: AxiosResponse = await axios.get("")
            const getEnvelops: Envelop[] = response.data
            setBuildingEnvelope(getEnvelops) 
        }catch(error){
            console.log(error)
        }        
               
    }
    
    useEffect(() => {
        fetchData();
      }, []);

    return(
        <>
            <p>Zapisane przegrody</p>
            {buildingEnvelope ? 
            buildingEnvelope.map((item, index) => {
                return(<div>
                    <p key={index}>{item.name}</p>
                </div>)
            }): "Loading data..."
            }
        </>
    )
}