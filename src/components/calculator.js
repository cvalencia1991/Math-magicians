import React from 'react';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <span className="styleoutput">0</span>
        <div className="stylebuttoms">
          <div className="styleCalculator">
            <button type="button">AC</button>
            <button type="button">7</button>
            <button type="button">4</button>
            <button type="button">1</button>
          </div>
          <div className="styleCalculator">
            <button type="button">+/-</button>
            <button type="button">8</button>
            <button type="button">5</button>
            <button type="button">2</button>
          </div>
          <div className="styleCalculator">
            <button type="button">%</button>
            <button type="button">9</button>
            <button type="button">6</button>
            <button type="button">3</button>
          </div>
          <div className="styleCalculator">
            <button className="buttonfunction" type="button">÷</button>
            <button className="buttonfunction" type="button">*</button>
            <button className="buttonfunction" type="button">-</button>
            <button className="buttonfunction" type="button">+</button>

          </div>
        </div>
        <div className="stylebottomcalculator">
          <button className="buttonZero" type="button">0</button>
          <button type="button">.</button>
          <button className="buttonfunction" type="button">=</button>
        </div>
      </div>
    );
  }
}
