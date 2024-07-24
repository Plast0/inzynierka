import { FC, useEffect, useState } from "react";
import { SaveButton } from "./SaveButton";
import axios from "axios";

  type ChoosenOptions = {
    value: string, 
    label: string, 
    lambda:number,
    thickness: number
  }
  type Materials = {
    name: string,    
    lambda:number,
    thicness: number
  }

  type ThermalRequirment = {
    id: number,
    name: string,
    maxValue: number
  }

interface Props  {
    structureForRseistance:  ChoosenOptions[],
    directionOfHeatFlow:number
    thermalRequirments: number
}

export const CalculatingButton: FC<Props> = ({structureForRseistance, directionOfHeatFlow, thermalRequirments}) =>{      
  const [UFactor, setUFactor] = useState<number>(0);
  const [ requirment, setRequirment] = useState<ThermalRequirment>();
  const [structureForEnvelope, setStructureForEnvelope] = useState<Materials[] | undefined>();
  const [ correct, isCorrect] = useState(false);
  const [ incorrect, isInCorrect] = useState(false);
  let Rsi:number = 0;
  const Rse:number = 0.04;

  const fetchRequirments = async () => {
    try{
      const result = await axios.get("https://localhost:7165/api/requirements/"+ thermalRequirments);
      console.log(result.data);
      setRequirment(result.data);
    } catch(err) {
        console.log(err)
    }
  }

  useEffect(() => {
    directionOfHeat(directionOfHeatFlow);
    fetchRequirments();
  }, [])

    const directionOfHeat = (directionOfHeatFlow:number) => {
      if(directionOfHeatFlow === 1){
        Rsi = 0.13;
      }else if ( directionOfHeatFlow === 2){
        Rsi = 0.10;
      } else {
        Rsi = 0.17;
      }
      console.log(Rsi);
    }

    const getStructure = (structureForRseistance:ChoosenOptions[]): Materials[] | undefined => {
        return structureForRseistance.map(item => ({
          name: item.label,
          lambda: item.lambda,
          thicness: item.thickness*100
        }))
      }
          
    const convertingStructures = (structureForRseistance:  ChoosenOptions[]) => {
      const materials: Materials[] | undefined = getStructure(structureForRseistance);
      setStructureForEnvelope(materials);
      console.log(structureForEnvelope)
    }

    const calculateUFactor = () => {               
        let RFactor: number = 0; 
        let UFactor: number = 0;    
        if(structureForRseistance){
          console.log(structureForRseistance)
          structureForRseistance.forEach((index) => {RFactor += index.thickness/index.lambda});          
          RFactor += (Rsi + Rse);
          UFactor = (1/RFactor);
          console.log(RFactor)
          console.log(UFactor)
          setUFactor(UFactor)
          convertingStructures(structureForRseistance)          
        }if(requirment){
          if(UFactor <= requirment?.maxValue && UFactor != 0) {isCorrect(true);isInCorrect(false)} else if (UFactor > requirment?.maxValue && UFactor != 0) {
          isCorrect(false);isInCorrect(true)
        } 
        }
             
    }

    return(
        <>
        <button onClick={calculateUFactor}>Oblicz</button>   
        <p>Wspolczynnik przewodzenia ciepła dla przegrody wynosi = {UFactor}</p>
        {correct ? <div><p>Współczynnik spełnia wyznaczoną normę</p></div>: <></>}
        {incorrect ? <div><p>Współczynnik nie spełnia wyznaczonej normy</p></div> : <></>}
        {correct ? <SaveButton structureForEnvelope={structureForEnvelope} Ufactor={UFactor} />: <></>  } 
        </>
    )
}