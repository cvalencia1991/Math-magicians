import React, { useState } from 'react';
import calculate from '../lib/calculate';

export default function Calculator() {
  const [{ total, next, operation }, caloperator] = useState<any>(
    { total: '0', next: null, operation: null },
  );

  const valbutton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    caloperator((state: any) => calculate(state, target.textContent || ''));
  };

  return (
    <div className="calculator-container">
      <div className="display">
        <div className="operation-hint">
          {total && operation ? `${total} ${operation}` : ''}
        </div>
        <div className="main-display">
          {next || total || '0'}
        </div>
      </div>
      <div className="buttons-grid">
        <button type="button" onClick={valbutton}>AC</button>
        <button type="button" onClick={valbutton}>+/-</button>
        <button type="button" onClick={valbutton}>%</button>
        <button className="button-op" type="button" onClick={valbutton}>÷</button>

        <button type="button" onClick={valbutton}>7</button>
        <button type="button" onClick={valbutton}>8</button>
        <button type="button" onClick={valbutton}>9</button>
        <button className="button-op" type="button" onClick={valbutton}>*</button>

        <button type="button" onClick={valbutton}>4</button>
        <button type="button" onClick={valbutton}>5</button>
        <button type="button" onClick={valbutton}>6</button>
        <button className="button-op" type="button" onClick={valbutton}>-</button>

        <button type="button" onClick={valbutton}>1</button>
        <button type="button" onClick={valbutton}>2</button>
        <button type="button" onClick={valbutton}>3</button>
        <button className="button-op" type="button" onClick={valbutton}>+</button>

        <button className="button-zero" type="button" onClick={valbutton}>0</button>
        <button type="button" onClick={valbutton}>.</button>
        <button className="button-op" type="button" onClick={valbutton}>=</button>
      </div>
    </div>
  );
}
