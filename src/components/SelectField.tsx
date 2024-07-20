import { FC, useState } from "react";
import "./Komponent.css";
import Creatable from "react-select/creatable";
import { SingleValue } from "react-select";

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

type Props = {
    data:Structure[] | null,
    //valueThickness : Thickness
    //valueThickness: (thickness: number[]) => void;
    //valueThickness: (thickness: number) => void;
    valueThickness: (thickness: ChoosenOptions) => void;
}

export const SelectField: FC<Props> = ({ data, valueThickness}) => {
    const [inputValue, setInputValue] = useState<number | number>(0.000);
    const [temporaryLabel, setTemporaryLabel] = useState<string | string>("");
    const [temporaryValue, setTemporaryValue] = useState<string | string>("");
    const [temporaryLambda, setTemporaryLambda] = useState<number | number>(0.000);
    
    const temporaryOption:SingleValue<{ value: string, label: string, lambda: number, thickness: number }> = {value: "", label: "Loading...", lambda: 0, thickness: 0 };
    
    const choosenOptions = [{ value: "", label: "", lambda: 0, thickness: 0 }];
    data
      ? data.forEach((item) => {
        //console.log(item.lambda)
          choosenOptions.push({ value: item.name, label: item.name,  lambda: item.lambda, thickness: item.thicness });
        })
      : choosenOptions.push({ value: "", label: "Loading...", lambda: 0, thickness: 0 });
  
      const addTemporaryOptions = (selectedOption: SingleValue<{ value: string, label: string, lambda: number, thickness: number }>) =>{
        if(selectedOption)
          {
            setTemporaryLabel(selectedOption.label);
            setTemporaryValue(selectedOption.value)
            setTemporaryLambda(selectedOption.lambda) 
          }
      }
      const handleChange = (selectedOption: SingleValue<{ value: string, label: string, lambda: number, thickness: number }>) => {
        if (selectedOption?.thickness) {
          setInputValue(selectedOption.thickness);
          selectedOption.thickness=selectedOption.thickness/100;
          valueThickness(selectedOption);
          addTemporaryOptions(selectedOption);                      
        } else {
          setInputValue(inputValue)
          console.log(inputValue)
          if(selectedOption){
            selectedOption.thickness=inputValue/100;
            addTemporaryOptions(selectedOption);
            valueThickness(selectedOption);          
        }
      }
    }     

      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.valueAsNumber);
        temporaryOption.thickness = e.target.valueAsNumber/100;
        temporaryOption.label = temporaryLabel;
        temporaryOption.lambda = temporaryLambda;            
        temporaryOption.value = temporaryValue;
        valueThickness(temporaryOption);
      } 

      const customStyles = {               
        control: styles => ({ ...styles, backgroundColor: "#3a3b3a", color: 'white', border: '1px solid white' }),
  option: (styles, { isFocused, isSelected }) => {
    const color = "#838383";
    return {
      ...styles,
      backgroundColor: isSelected
        ? 'grey'
        : isFocused
        ? color
        : null,
      color: isSelected
        ? 'white'
        : isFocused
        ? 'white'
        : 'black',  
    };
  },
  input: styles => ({ ...styles,  color: 'white' }),
  placeholder: styles => ({ ...styles, color: 'white' }),
  SingleValue: (styles) => ({ ...styles, color: 'white' }),
};

    
  
    return (
      <>
      <div className="table-container">
        <Creatable
          styles={customStyles}          
          placeholder="Wybierz material"
          options={choosenOptions}
          noOptionsMessage={() => "nieznaleziono takiej nazwy"}
          onChange={handleChange}
        />
        <div className="input-container">
        <input 
        value={inputValue}
        type="number"
        onChange={handleInputChange} 
        placeholder="Podaj grubosc materialu"
        className="number-input" 
      /><span className="unit">cm</span>
      </div>
      </div>
      </>
    );
  };