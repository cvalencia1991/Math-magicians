import React from 'react';
import Calculator from '../components/calculator';

const text = "Let's do some math!";

const Calculatorscren = () => (
  <div>
    <h2>{text}</h2>
    <div className="positionCal">
      <Calculator />
    </div>
  </div>
);
export default Calculatorscren;
