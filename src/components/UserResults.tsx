
import { FC, useEffect, useState } from "react"
import axios from '../API/axios';
import useAuth from "../Hooks/useAuth";
import './UserResults.css'

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

export const UserResults: FC = () => {
    const { user } = useAuth();

    const [buildingEnvelope, setBuildingEnvelope] = useState<Envelop[] | null>([]);
    const fetchData = async () => {
        try {
            const response = await axios.get<Envelop[]>(user?.id + "/envelope/")
            setBuildingEnvelope(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="listcontainer">
                {user ? <h3>Użytkownik: {user.userName}</h3> : <p>"Loading data..."</p>}
                <p>Zapisane przegrody</p>
                <ul>
                    {buildingEnvelope?.map((item) => (
                        <li key={item.id} className="parentlist">
                            <h4>{item.name} współczynnik przenikania ciepła: {item.valuU}W/m<sup>2</sup>K</h4>
                            <ul>
                                {item.materials.map((structure) => (
                                    <li key={structure.id}>
                                        {structure.name} - lambda: {structure.lambda}W/mk, grubość: {structure.thicness}cm
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
