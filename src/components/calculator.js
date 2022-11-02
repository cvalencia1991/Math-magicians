import React, { useState } from 'react';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [state, caloperator] = useState({ total: 0, next: null, operation: null });

  const valbutton = (e) => {
    caloperator((state) => calculate(state, e.target.textContent));
  };
  const { total, next, operation } = state;
  return (
    <>
      <span className="styleoutput">
        {total}
        {operation}
        {next}
      </span>
      <div className="stylebuttoms">
        <div className="styleCalculator">
          <button type="button" onClick={valbutton}>AC</button>
          <button type="button" onClick={valbutton}>7</button>
          <button type="button" onClick={valbutton}>4</button>
          <button type="button" onClick={valbutton}>1</button>
        </div>
        <div className="styleCalculator">
          <button type="button" onClick={valbutton}>+/-</button>
          <button type="button" onClick={valbutton}>8</button>
          <button type="button" onClick={valbutton}>5</button>
          <button type="button" onClick={valbutton}>2</button>
        </div>
        <div className="styleCalculator">
          <button type="button" onClick={valbutton}>%</button>
          <button type="button" onClick={valbutton}>9</button>
          <button type="button" onClick={valbutton}>6</button>
          <button type="button" onClick={valbutton}>3</button>
        </div>
        <div className="styleCalculator">
          <button className="buttonfunction" type="button" onClick={valbutton}>÷</button>
          <button className="buttonfunction" type="button" onClick={valbutton}>*</button>
          <button className="buttonfunction" type="button" onClick={valbutton}>-</button>
          <button className="buttonfunction" type="button" onClick={valbutton}>+</button>
        </div>
      </div>
      <div className="stylebottomcalculator">
        <button className="buttonZero" type="button" onClick={valbutton}>0</button>
        <button type="button" onClick={valbutton}>.</button>
        <button className="buttonfunction" type="button" onClick={valbutton}>=</button>
      </div>
    </>
  );
}
