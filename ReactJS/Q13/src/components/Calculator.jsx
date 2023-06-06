import  { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');

  const handleClick = (buttonValue) => {
    if (display === '0') {
      setDisplay(buttonValue);
    } else {
      setDisplay(display + buttonValue);
    }
  };

  const calculateResult = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clearDisplay = () => {
    setDisplay('0');
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={clearDisplay}>AC</button>
          <button onClick={() => handleClick('/')}>/</button>
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
        </div>
        <div className="row">
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={calculateResult}>=</button>
          <button onClick={() => handleClick('+')}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
