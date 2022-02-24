
import { useState } from "react";
import MainHeading from "../../Components/MainHeading";
import "./Calc.scss";

const Calc = () => {

    const[result, setResult] = useState("0");

    const inputHandler = (e) => {
        setResult(e.target.value)
    }

const clear = () =>{
    setResult("");
}
const del = () => {
    setResult(result.slice(0, -1))
}

const frmSubmit = (e) => {
    e.preventDefault();
}

const clickHandler = (e) => {
    setResult(result.concat(e.target.name));
    console.log(result);
}

const calculate = () => {
   // setResult(eval(result)); /// not continue next calculation with calculated value
   // setResult(eval(result).toString()); //continue next calculation  with calculated value
   try{
     setResult(eval(result).toString())
   }
   catch(errr){
       //let errorMsg = "no a corrrect value";
         setResult("Error!!!");
   }
}

  return (
    <div className="main-container">
      <MainHeading pageTitle="Calculator" />
      <form onSubmit={frmSubmit}>
        <div className="calculator">
            <div className="calcInput">
                <input type="text" value={result} onChange={inputHandler} />
            </div>
            <div className="keypad">
                <button className="btn btn-color clear" onClick={clear}>Clear</button>
                <button  className="btn btn-color del" onClick={del}>Del</button><br />
                <button onClick={ clickHandler } name="7" className="btn btn-color">7</button>
                <button onClick={ clickHandler } name="8" className="btn btn-color">8</button>
                <button onClick={ clickHandler } name="9" className="btn btn-color">9</button>
                <button onClick={ clickHandler } name="+" className="btn btn-color">+</button><br />
                <button onClick={ clickHandler } name="4" className="btn btn-color">4</button>
                <button onClick={ clickHandler } name="5" className="btn btn-color">5</button>
                <button onClick={ clickHandler } name="6" className="btn btn-color">6</button>
                <button onClick={ clickHandler } name="-" className="btn btn-color">-</button><br />
                <button onClick={ clickHandler } name="1" className="btn btn-color">1</button>
                <button onClick={ clickHandler } name="2" className="btn btn-color">2</button>
                <button onClick={ clickHandler } name="3" className="btn btn-color">3</button>
                <button onClick={ clickHandler } name="/" className="btn btn-color">/</button><br />
                <button onClick={ clickHandler } name="." className="btn btn-color">.</button>
                <button onClick={ clickHandler } name="0" className="btn btn-color">0</button>
                <button onClick={ clickHandler } name="*" className="btn btn-color">&times;</button>
                <button onClick={ calculate }  className="btn btn-color">=</button>
            </div>
        </div>
      </form>
    </div>
  );
};

export default Calc;
