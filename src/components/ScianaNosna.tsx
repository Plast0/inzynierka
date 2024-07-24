import { FC,  useEffect, useState } from "react";
import "./Komponent.css";
import axios from "axios";
import { SelectField } from "./SelectField";
import {CalculatingButton} from "./CalculatingButton";

type Structure = {
    id: string;
    name: string;
    lambda: number;
    thicness: number;
  };

  type ChoosenOptions = {
    value: string, 
    label: string, 
    lambda: number,
    thickness: number
  }
  
  export const ScianaNosna: FC = () => {
    const [data, setDataStructure] = useState<Structure[] | null>([]);
    const [dataInsulation, setDataInsulation] = useState<Structure[] | null>([]);
    const [dataExteriorFinishing, setDataExteriorFinishing] = useState<Structure[] | null>([]);
 
    const [structureForRseistance, setStructureForRseistance] = useState<ChoosenOptions[]> ([]);

    const fetchData = () => {
      const getStructure = axios.get("https://localhost:7165/api/calculator/wallstructure");
      const getInsulation = axios.get("https://localhost:7165/api/calculator/wallinsulation");
      const getExteriroFinish = axios.get("https://localhost:7165/api/calculator/wallexteriorfinishing");
      axios.all([getStructure, getInsulation, getExteriroFinish]).then(
        axios.spread((...allData) => {
          setDataStructure(allData[0].data);
          setDataInsulation(allData[1].data);
          setDataExteriorFinishing(allData[2].data);
        })
      );
    };
  
    useEffect(() => {
      fetchData();
    }, []);

    const updateStructureForRseistance = (index:number, newValue:ChoosenOptions) => {
      setStructureForRseistance(prevItems => {
        const updatedItems = [...prevItems];
        updatedItems[index] = { ...updatedItems[index], value: newValue.label, label: newValue.label , lambda: newValue.lambda, thickness: newValue.thickness, };
        return updatedItems;
      })
    }

    const getWallThickness = (thickness: ChoosenOptions) => {     
        updateStructureForRseistance(0, thickness)
        console.log(structureForRseistance) 
    }
    const getInsulationThickness = (thickness: ChoosenOptions) => {
      updateStructureForRseistance(1, thickness)
      console.log(structureForRseistance)    
    }
    const getExteriorFinishingThickness = (thickness: ChoosenOptions) => {
      updateStructureForRseistance(2, thickness)
      console.log(structureForRseistance)      
    }  
    
    const directionOfHeatFlow: number = 1;
    const thermalRequirments: number = 1;    
  
    return (
      <>
        <p>Sciana Nosna</p>
        <SelectField data={data} valueThickness={getWallThickness} />   
        <br />
        <SelectField data={dataInsulation} valueThickness={getInsulationThickness}/>
        <br />
        <SelectField data={dataExteriorFinishing} valueThickness={getExteriorFinishingThickness}/>
        <br />        
        <CalculatingButton structureForRseistance = {structureForRseistance} directionOfHeatFlow = { directionOfHeatFlow} thermalRequirments={thermalRequirments} />            
      </>
    );
  };
