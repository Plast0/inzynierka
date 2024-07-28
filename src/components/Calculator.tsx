import {FC} from "react";
import { ScianaNosna } from "./ScianaNosna";
import { DachSkosny } from "./DachSkosny";

interface ComponentProps {
    selectedOption: string;
  }
  

const Calculator:FC<ComponentProps> = ({selectedOption}) =>{
    let content: JSX.Element;
  switch (selectedOption) {
    case 'stropDachuPlaskiego':
      content = <p>stropDachuPlaskiego</p>;
      break;
    case 'scianaZewnetrzna':
      content = <ScianaNosna />;      
      break;
    case 'stropNadPiwnica':
      content = <p>stropNadPiwnica</p>;
      break;
    case 'dachSpadowy':
      content = <DachSkosny />;
      break;
      case 'scianyDzialowe':
        content = <p>scianyDzialowe</p>;
        break;
      case 'strop':
        content = <p>strop</p>;
        break;
      case 'ScianyFundamentowe':
        content = <p>ScianyFundamentowe</p>;
        break;
      case 'PlytaFundamentowa':
        content = <p>PlytaFundamentowa</p>;
        break;
      case 'StropNadwieszony':
        content = <p>StropNadwieszony</p>;
        break;

    default:
      content = <p>Wybierz przegrodę</p>;
  }
    return <div>
        {content}
    </div>
}

export default Calculator;
