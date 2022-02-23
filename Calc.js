

import React from 'react';
import "../../style/global.css";
import { useState } from "react";

const Calc = () => {

    const[result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }
   const clear = () => {
    setResult("");
   }

   const backspace = () =>{
         setResult(result.slice(0,-1));
   }
   const calculate = () => {
       try{
        setResult(eval(result).toString());
       } 
       catch(err){
        setResult("Error")
       }
   
   }

    return (
        <div className="row txt-sm bdr-btm g-0">
                <div className="calc">
                  <form>
                      <input type="text" onChange={(e)=> setResult(e.target.value)} value={ result } />
                  </form>
                  <div className="row">
                     <div className="keypad">
                        <button onClick={ handleClick } className="btn" onClick={clear}>Clear</button>
                        <button onClick={ handleClick } className="btn" onClick={backspace}>Delete</button>
                        <button name="/" onClick={ handleClick } className="btn">&divide;</button>
                        <button name="-" onClick={ handleClick } className="btn">&ndash;</button>
                    </div>
                    <div className="keypad">
                        <button name="7" onClick={ handleClick } className="btn">7</button>
                        <button name="8" onClick={ handleClick } className="btn">8</button>
                        <button name="9" onClick={ handleClick } className="btn">9</button>
                        <button name="X" onClick={ handleClick } className="btn">&times;</button>
                    </div>
                    <div className="keypad">
                        <button name="4" onClick={ handleClick } className="btn">4</button>
                        <button name="5" onClick={ handleClick } className="btn">5</button>
                        <button name="6" onClick={ handleClick } className="btn">6</button>
                        <button name="+" onClick={ handleClick } className="btn">+</button>
                    </div>
                    <div className="keypad">
                       
                        <button name="1" onClick={ handleClick } className="btn">1</button>
                        <button name="2" onClick={ handleClick } className="btn">2</button>
                        <button name="3" onClick={ handleClick } className="btn">3</button>
                        <button onClick={ calculate } className="btn">=</button>
                    </div>
                    <div className="keypad">
                        <button name="." onClick={ handleClick } className="btn">.</button>
                        <button name="0" onClick={ handleClick } className="btn">0</button>
                       
                    </div>

                  </div>
                </div>
        </div>
    );
}
export default Calc;