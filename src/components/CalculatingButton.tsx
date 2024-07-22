import { FC, useEffect, useState } from "react";
import { SaveButton } from "./SaveButton";

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

interface Props  {
    structureForRseistance:  ChoosenOptions[],
    directionOfHeatFlow:number
}

export const CalculatingButton: FC<Props> = ({structureForRseistance, directionOfHeatFlow}) =>{      
  const [UFactor, setUFactor] = useState<number>(0);

  const [structureForEnvelope, setStructureForEnvelope] = useState<Materials[] | undefined>();
  let Rsi:number = 0;
  const Rse:number = 0.04;

  useEffect(() => {
    directionOfHeat(directionOfHeatFlow);
  })

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
          
        }            
    }

    return(
        <>
        <button onClick={calculateUFactor}>Oblicz</button>   
        <p>Wspolczynnik przewodzenia ciepła dla przegrody wynosi = {UFactor}</p>  
        <SaveButton structureForEnvelope={structureForEnvelope} Ufactor={UFactor} />   
        </>
    )
}