import { FC, useEffect, useState } from "react";

  type ChoosenOptions = {
    value: string, 
    label: string, 
    lambda:number,
    thickness: number
  }

interface Props  {
    structureForRseistance:  ChoosenOptions[] | undefined,
    directionOfHeatFlow:number
}

export const CalculatingButton: FC<Props> = ({structureForRseistance, directionOfHeatFlow}) =>{      
  const [UFactor, setUFactor] = useState<number>(0);
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
        }            
    }

    return(
        <>
        <button onClick={calculateUFactor}>Oblicz</button>   
        <p>Wspolczynnik przewodzenia ciepła dla przegrody wynosi = {UFactor}</p>     
        </>
    )
}