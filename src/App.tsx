
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Experience } from "./components/Experience.jsx";
import Calculator from './components/Calculator.js';
import { useState } from 'react';
import { Menu } from './components/Menu.js';


const App = () => { 
  const [selectedOption, setSelectedOption] = useState<string>('option1');

  const handleBuildingClick = (meshType: string) => {
    let option = '';
    switch (meshType) {
      case 'ocieplenie':
        option = 'option1';
        break;
      case 'sciany_pietro':
        option = 'option2';
        break;
      case 'sciany_parter':
        option = 'option3';
        break;
        case 'ocieplenie_dach':
          option = 'option4';
          break;
      // Add more cases for other mesh types as needed
      default:
        option = 'defaultOption';
        break;
    }
    setSelectedOption(option);
  };

  return (
    <> 
      <div className='menu-icon'>
        <p>Kalkulator współczynnika przenikania ciepła</p>
        <Menu />   
      </div>      
      <Canvas className='model' camera={{far:100, fov: 35, near: 0.1, position:[30,7,20]}}>
        <Experience onBuildingClick={handleBuildingClick}/>
      </Canvas>
      <Calculator selectedOption={selectedOption} />
                   
    </>
  )
}

export default App
