import { useSelector, useDispatch } from "react-redux";
import {changeNumber,changeOperand,changeEqual,changeClear} from"./calculatorSlice"
import './App.css'



export default function App() {
 
  const calculator=useSelector((state)=>state.calculator)

  const dispatch = useDispatch();

  

 const handleNumber = (e) => {
    dispatch(changeNumber(e.target.value));
  };

  const handleOperand = (e) => {
    dispatch(changeOperand(e.target.value));
  };

  const handleEqual =()=>
  {
    dispatch(changeEqual())
  }

  const handleClear =()=>
  {
    dispatch(changeClear())
  }

  return (
    <div>
      <div className="calculator">
        <div className="display">
          <div className="display-up">
              <input value={calculator.left} disabled/>
              <input value={calculator.opr} disabled />
              <input value={calculator.right} disabled/>
          </div>
          <div className="display-down">
              <input value={calculator.result} disabled/>
          </div>
        </div>
        <div className="keyboard">
          <div className="up">
            <div className="numbers">
              <button className="number"  onClick={handleNumber} value='7'>7</button>
              <button className="number"  onClick={handleNumber} value='8'>8</button>
              <button className="number"  onClick={handleNumber} value='9'>9</button>
              <button className="number"  onClick={handleNumber} value='4'>4</button>
              <button className="number"  onClick={handleNumber} value='5'>5</button>
              <button className="number"  onClick={handleNumber} value='6'>6</button>
              <button className="number"  onClick={handleNumber} value='1'>1</button>
              <button className="number"  onClick={handleNumber} value='2'>2</button>
              <button className="number"  onClick={handleNumber} value='3'>3</button>
            </div>
            <div className="operands">
              <button className="operand"  onClick={handleOperand} value='-'>-</button>
              <button className="operand"  onClick={handleOperand} value='+'>+</button>
              <button className="operand"  onClick={handleOperand} value='*'>*</button>
              <button className="operand"  onClick={handleOperand} value='/'>/</button>
            </div>
          </div>
            <div className="down">
                <div className="other-btns">
                  <button className="clear" onClick={handleClear}>AC</button>
                  <button className="number"onClick={handleNumber} value='0'>0</button>
                  <button className="equal" onClick={handleEqual}>=</button>
                </div>
            </div>
        </div>
       
      </div>
    </div>
  );
}

