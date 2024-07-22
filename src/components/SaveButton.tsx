import { FC, useState } from "react"
import useAuth from "../Hooks/useAuth"
import axios from "../API/axios"

type Materials = {
    name: string,    
    lambda:number,
    thicness: number
  }

interface Props  {
    structureForEnvelope:  Materials[] | undefined,
    Ufactor: number,
}

export const SaveButton : FC<Props>= ({structureForEnvelope, Ufactor}) => {
    const { user } = useAuth();
    const [envelopename, setEnvelopeName] = useState<string>('');
    
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const Options: {name:string; valuU:number; materials:Materials[] | undefined} = {
        name: envelopename, 
        valuU: Ufactor,
        materials: structureForEnvelope        
    }
    console.log('Options:', JSON.stringify(Options, null, 2));
        try{
            const response = await axios.post(user?.id + "/envelope", JSON.stringify(
                {
                    Name:Options.name, ValuU:Options.valuU, Materials:Options.materials
                }),
            {
                headers: {'Content-Type': 'application/json'}
             });
             console.log(response.data.id)
             console.log(response.data)
        }catch(err){
            console.log(err)
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Nazwa przegrody" 
            onChange={(e) => setEnvelopeName(e.target.value)}
            value={envelopename}
            required />
            <button type="submit">Zapisz przegrodę.</button>
        </form>        
        </>
    )
}