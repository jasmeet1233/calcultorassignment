import "./App.css";
import { useState } from "react";
import Calculator from "./components/Calculator";
import History from "./components/History";

function App() {
  const [expression, setExpression] = useState([]);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(true);

  const clearHistory = () => {
    setHistory([]);
  };

  const handleClick = (value) => {
    setExpression([...expression, value]);
  };

  const handleResult = () => {
    if (expression.length === 0) {
      return;
    }

    const result = expression
      .join("")
      .split(/(\D)/g)
      .map((value) => (value.match(/\d/g) ? parseInt(value, 0) : value))
      .reduce((acc, value, index, array) => {
        switch (value) {
          case "+":
            return (acc = acc + array[index + 1]);
          case "-":
            return (acc = acc - array[index + 1]);
          case "x":
            return (acc = acc * array[index + 1]);
          case "÷":
            return (acc = acc / array[index + 1]);
          default:
            return acc;
        }
      });
    setHistory([...history, `${expression.join("")}=${result}`]);
    setExpression([]);
  };

  const specialHandler = (data) => {
    if (data === "c") {
      setExpression([]);
    } else if (data === "backspace") {
      const data = [...expression];
      data.length > 0 && data.pop();
      setExpression(data);
    }
  };

  return (
    <div className="wrapper">
      <Calculator
        handleClick={handleClick}
        specialHandler={specialHandler}
        expression={expression}
        handleResult={handleResult}
      />

      {showHistory && <History clearHistory={clearHistory} history={history} />}
    </div>
  );
}

export default App;
