import React from 'react';
import Calculator from '../components/calculator';

const CalculatorPage = () => {
  const text = "Let's do some math!";
  return (
    <div className="page-container calculator-page">
      <h2>{text}</h2>
      <Calculator />
    </div>
  );
};

export default CalculatorPage;
