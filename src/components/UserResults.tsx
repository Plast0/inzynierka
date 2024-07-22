
import { FC, useEffect, useState } from "react"
import axios from '../API/axios';
import useAuth from "../Hooks/useAuth";

type Envelop = {
    id: number;
    name: string;
    valuU: number;
    materials: Structure[];
}

type Structure = {
    id: number;
    name: string;
    lambda: number;
    thicness: number;
  };

export const UserResults:FC = () => {
    const { user } = useAuth();

    const [buildingEnvelope, setBuildingEnvelope] = useState<Envelop[] | null>([]);
    const fetchData = async () =>{
        try{
            const response = await axios.get<Envelop[]>(user?.id + "/envelope/" )
            setBuildingEnvelope(response.data) 
            console.log(response.data)
        }catch(error){
            console.log(error)
        }        
               
    }
    
    useEffect(() => {
        fetchData();
      }, []);

    return(
        <>
            <div>
            {user? <p>Użytkownik: {user.userName}</p>: <p>"Loading data..."</p>}
            <p>Zapisane przegrody</p>
            <ul>
            {buildingEnvelope?.map((item) =>(                 
                    <li key={item.id}>
                        {item.name} wspołczynnik przenikania ciepła: {item.valuU}
                    <ul>
                        {item.materials.map((structure) => (
                            <li key={structure.id}>
                                {structure.name} - lambda: { structure.lambda}, grubość: {structure.thicness}
                            </li>
                            ))
                        }
                    </ul> </li>
                    )               
            )
            }
            </ul>
            </div>
        </>
    )
}

// }<div>
// {user? <p>Użytkownik: {user.userName}</p>: <p>"Loading data..."</p>}
// <p>Zapisane przegrody</p>
// {buildingEnvelope ? 
// buildingEnvelope.map((item, index) => {
//     return(<div><ul>
//         <li key={index}>{item.name} wspołczynnik przenikania ciepła: {item.valuU}</li>
//         <ul>
//             {item.materials.map((structure) => (
//                 <li key={`${index}-${structure.id}`}>
//                     {structure.name} - lambda: { structure.lambda}, grubość: {structure.thicness}
//                 </li>
//                 ))
//             }
//         </ul>
//         </ul>
//     </div>)
// }): <p>"Loading data..."</p>
// }
// </div>