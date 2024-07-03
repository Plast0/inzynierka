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
  
    //const [structureThickness, setWallThickness] = useState<number[]>([]);
    //const [structureThickness, setWallThickness] = useState<ChoosenOptions>();
    //const [insulationThickness, setInsulationThickness] = useState<ChoosenOptions | undefined>();
    //const [exteriorFinishingThickness, setExteriorFinishingThickness] = useState<ChoosenOptions | undefined>();    
    
    //const structureForRseistance:ChoosenOptions[]= [];
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

    //   const getWallThickness = (thickness: number) => {        
    //     setWallThickness(prevThickness => [...prevThickness, thickness]);        
    // }
    const getWallThickness = (thickness: ChoosenOptions) => {        
        //setWallThickness(thickness);         
        updateStructureForRseistance(0, thickness)
        console.log(structureForRseistance) 
    }
    const getInsulationThickness = (thickness: ChoosenOptions) => {        
      //setInsulationThickness(thickness);
      updateStructureForRseistance(1, thickness)
      console.log(structureForRseistance)    
    }
    const getExteriorFinishingThickness = (thickness: ChoosenOptions) => {        
      //setExteriorFinishingThickness(thickness); 
      updateStructureForRseistance(2, thickness)
      console.log(structureForRseistance)      
    }  
    
    const directionOfHeatFlow: number = 1;
    
  
    return (
      <>
        <p>Sciana Nosna</p>
        <SelectField data={data} valueThickness={getWallThickness} />         
        {/* {console.log(structureThickness.map((item) => ({item})))}
        {
          structureThickness.map((item, index) => (<p key={index}>{item}</p>))
        }         */}
        <br />
        <SelectField data={dataInsulation} valueThickness={getInsulationThickness}/>
        <br />
        <SelectField data={dataExteriorFinishing} valueThickness={getExteriorFinishingThickness}/>
        <br />        
        <CalculatingButton structureForRseistance = {structureForRseistance} directionOfHeatFlow = { directionOfHeatFlow}/>        
        {/* <CalculatingButton structureThickness={structureThickness} insulationThickness={insulationThickness} exteriorFinishingThickness={exteriorFinishingThickness} /> */}
      </>
    );
  };

// export const ScianaNosna: FC = () => {
//   const [data, setDataStructure] = useState<Structure[] | null>([]);
//   const [dataInsulation, setDataInsulation] = useState<Structure[] | null>([]);
//   const [dataExteriorFinishing, setDataExteriorFinishing] = useState<
//     Structure[] | null
//   >([]);
  

//   const fetchData = () => {
//     const getStructure = axios.get(
//       "https://localhost:7165/api/calculator/wallstructure"
//     );
//     const getInsulation = axios.get(
//       "https://localhost:7165/api/calculator/wallinsulation"
//     );
//     const getExteriroFinish = axios.get(
//       "https://localhost:7165/api/calculator/wallexteriorfinishing"
//     );
//     axios.all([getStructure, getInsulation, getExteriroFinish]).then(
//       axios.spread((...allData) => {
//         setDataStructure(allData[0].data);
//         setDataInsulation(allData[1].data);
//         setDataExteriorFinishing(allData[2].data);
//       })
//     );
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);  

//   const selectField = (data: Structure[] | null) => {
//     const [inputValue, setInputValue] = useState<number>(0);

//     const choosenOptions = [{ value: "", label: "", thickness: 0 }];    
//     data
//       ? data.forEach((item) => {
//           choosenOptions.push({ value: item.name, label: item.name, thickness: item.thicness});
//         })
//       : choosenOptions.push({ value: "", label: "Loading...", thickness: 0});        

//     const handleChange = (selectedOption: SingleValue<{value: string, label:string, thickness:number }>) =>{
//         console.log(selectedOption?.thickness);
//         if(selectedOption?.thickness) setInputValue(selectedOption.thickness);
//     }    

//     return (
//         <div>
//       <Creatable
//         placeholder="Wybierz material"
//         options={choosenOptions}
//         noOptionsMessage={() => "nieznaleziono takiej nazwy"}
//         onChange={handleChange}
//       />
//       <input value={inputValue || ""} readOnly />
//       </div>
//     );
//   };

//   return (
//     <>
//       <p>Sciana Nosna</p>
//       {selectField(data)}
//       <br></br>
//       {selectField(dataInsulation)}
//       <br></br>
//       {selectField(dataExteriorFinishing)}
//     </>
//   );
// };

// {data && data.length > 0 ?
// data.map((item) => {
//     return(<div>
//         <select>
//         <option >{ item.name }</option>
//         </select>
//         <input value={ item.thicness }></input>
//         </div>
//     )
// }) : "Loading data..."
//}

//const optionsExteriorFinish = [{ value: "", label: "" }];
// {
//     dataExteriorFinishing && dataExteriorFinishing.length > 0 ?
//     dataExteriorFinishing.map((item) => {
//      optionsExteriorFinish.push({value: item.name, label: item.name});
//     return(<Creatable
//     placeholder= "Select an individual"
//     options={optionsExteriorFinish}
//     noOptionsMessage={()=>"name not found"}
//     />)
//     }) :   "Loading data..."
// }

//const getWallThickness = (thickness: ChoosenOptions) => {        
  //setWallThickness(thickness); 
  //console.log(thickness)        
  //structureForRseistance[0] = {value: thickness.value, label: thickness.label, lambda: thickness.lambda, thickness: thickness.thickness};
  //structureForRseistance[0] = structureThickness
  //if(structureThickness){
    //console.log(structureThickness)
    //structureForRseistance[0] = {value: structureThickness.value, label: structureThickness.label, lambda: structureThickness.lambda, thickness: structureThickness.thickness};
    //setStructureForRseistance(structureThickness)
  //}
  //structureForRseistance[0] =  thickness; 
  //updateStructureForRseistance(0, thickness)
  //console.log(structureForRseistance) 
//}
