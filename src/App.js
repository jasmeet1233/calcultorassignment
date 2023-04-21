import "./App.css";
import { useState } from "react";

function App() {
  const [expression, setExpression] = useState([]);
  const [history, setHistory] = useState([]);

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
      <div className="App">
        <span className="expression">{expression}</span>

        <section className="panel">
          <section className="numbers">
            <div>
              <button onClick={() => handleClick(7)} className="number">
                7
              </button>
              <button onClick={() => handleClick(8)} className="number">
                8
              </button>
              <button onClick={() => handleClick(9)} className="number">
                9
              </button>
            </div>

            <div>
              <button onClick={() => handleClick(4)} className="number">
                4
              </button>
              <button onClick={() => handleClick(5)} className="number">
                5
              </button>
              <button onClick={() => handleClick(6)} className="number">
                6
              </button>
            </div>

            <div>
              <button onClick={() => handleClick(1)} className="number">
                1
              </button>
              <button onClick={() => handleClick(2)} className="number">
                2
              </button>
              <button onClick={() => handleClick(3)} className="number">
                3
              </button>
            </div>

            <div>
              <button onClick={() => handleClick(0)} className="number">
                0
              </button>
              <button onClick={() => specialHandler("c")} className="number">
                C
              </button>
              <button
                onClick={() => specialHandler("backspace")}
                className="number"
              >
                {"<-"}
              </button>
            </div>
          </section>

          <section className="operators">
            <button onClick={() => handleClick("÷")} className="operator">
              ÷
            </button>
            <button onClick={() => handleClick("x")} className="operator">
              x
            </button>
            <button onClick={() => handleClick("-")} className="operator">
              -
            </button>
            <button onClick={() => handleClick("+")} className="operator">
              +
            </button>
            <button onClick={() => handleResult()} className="operator">
              =
            </button>
          </section>
        </section>
      </div>

      <div className="history">
        <p>History</p>
        {history.map((data) => {
          return <div>{data}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
