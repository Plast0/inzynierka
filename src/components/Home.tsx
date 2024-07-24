import '../App.css'
import { Canvas } from '@react-three/fiber'
import { Experience } from "./Experience.js";
import Calculator from './Calculator.js';
import { useState } from 'react';
import { Menu } from './Menu.js';

export const Home = () => {
  const [selectedOption, setSelectedOption] = useState<string>('option1');

  const handleBuildingClick = (meshType: string) => {
    let option = '';
    switch (meshType) {
      case 'stropDachuPlaskiego':
        option = 'stropDachuPlaskiego';
        break;
      case 'scianaZewnetrzna':
        option = 'scianaZewnetrzna';
        break;
      case 'stropNadPiwnica':
        option = 'stropNadPiwnica';
        break;
      case 'dachSpadowy':
        option = 'dachSpadowy';
        break;
      case 'scianyDzialowe':
        option = 'scianyDzialowe';
        break;
      case 'strop':
        option = 'strop';
        break;
      case 'ScianyFundamentowe':
        option = 'ScianyFundamentowe';
        break;
      case 'PlytaFundamentowa':
        option = 'PlytaFundamentowa';
        break;
      case 'StropNadwieszony':
        option = 'StropNadwieszony';
        break;
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
      <Canvas className='model' camera={{ far: 100, fov: 45, near: 0.1, position: [30, 7, 20] }}>
        <Experience onBuildingClick={handleBuildingClick} />
      </Canvas>
      <Calculator selectedOption={selectedOption} />

    </>
  )
}