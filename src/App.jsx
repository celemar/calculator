import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    // Check if the last character of the input is an operator
    const lastCharIsOperator = ['+', '-', '*', '/'].includes(input.slice(-1));

    // Check if the value is an operator
    const isOperator = ['+', '-', '*', '/'].includes(value);
  
    // If last character is an operator and the new value is also an operator, replace the last operator
    if (lastCharIsOperator && isOperator) {
      setInput(input.slice(0, -1) + value);
    } else {
      setInput(input + value);
    }
  };

   const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('0');
    }
  };

  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const clearInput = () => {
    setInput("");
  };


  return (
    <main className="calculator">
      <header>
        <h1>calc</h1>
        <div className="themes">
          <p>THEME</p>
          <div className="themes-btns">
            <div className="labels">         
              <label htmlFor="theme1"><span className="sr-only">Theme 1</span>1</label>
              <label htmlFor="theme2"><span className="sr-only">Theme 2</span>2</label>
              <label htmlFor="theme3"><span className="sr-only">Theme 3</span>3</label>
            </div>
            <div className="theme-inputs">
              <input
                id="theme1"
                type="radio"
                name="theme"
                value="theme1"
                defaultChecked
              />
              <input id="theme2" type="radio" name="theme" value="theme2" />
              <input
                id="theme3"
                type="radio"
                name="theme"
                value="theme3"
                data-theme="theme3"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="screen">
        <input
          className="user-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-live="polite"
          readOnly
        />
      </div>

      <div className="buttons-container">
        <button type="button" onClick={() => handleClick("7")}>7</button>
        <button type="button" onClick={() => handleClick("8")}>8</button>
        <button type="button" onClick={() => handleClick("9")}>9</button>
        <button type="button" className="delBtn" onClick={() => handleDelete()}>
          DEL
        </button>
        <button type="button" onClick={() => handleClick("4")}>4</button>
        <button type="button" onClick={() => handleClick("5")}>5</button>
        <button type="button" onClick={() => handleClick("6")}>6</button>
        <button type="button" onClick={() => handleClick("+")}>+</button>
        <button type="button" onClick={() => handleClick("1")}>1</button>
        <button type="button" onClick={() => handleClick("2")}>2</button>
        <button type="button" onClick={() => handleClick("3")}>3</button>
        <button type="button" onClick={() => handleClick("-")}>-</button>
        <button type="button" onClick={() => handleClick(".")}>.</button>
        <button type="button" onClick={() => handleClick("0")}>0</button>
        <button type="button" onClick={() => handleClick("/")}>/</button>
        <button type="button" onClick={() => handleClick("*")}>x</button>

        <button type="button" className="resetBtn" onClick={() => clearInput()}>
          RESET
        </button>
        <button type="button" className="resultBtn" onClick={() => calculateResult()}>
          =
        </button>
      </div>
    </main>
  );
}

export default App;
