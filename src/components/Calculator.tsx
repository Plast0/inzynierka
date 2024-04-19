import {FC} from "react";
import { ScianaNosna } from "./ScianaNosna";
import { DachSkosny } from "./DachSkosny";

interface ComponentProps {
    selectedOption: string;
  }
  

const Calculator:FC<ComponentProps> = ({selectedOption}) =>{
    let content: JSX.Element;
  switch (selectedOption) {
    case 'option1':
      content = <p>Ocieplenie</p>;
      break;
    case 'option2':
      content = <ScianaNosna />;
      
      break;
    case 'option3':
      content = <ScianaNosna />;
      break;
    case 'option4':
      content = <DachSkosny />;
      break;
    default:
      content = <p>No content</p>;
  }
    return <div>
        {content}
    </div>
}

export default Calculator;
