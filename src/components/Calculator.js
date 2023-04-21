import React from 'react'

const Calculator = ({handleClick, specialHandler, expression, handleResult}) => {
  return (
    <div className="App">
      {/* <div
        className="hamburger-line"
        onClick={() => setShowHistory(!showHistory)}
      >
        H
      </div> */}
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
          <button onClick={() => handleClick("÷")}>÷</button>
          <button onClick={() => handleClick("x")}>x</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleResult()}>=</button>
        </section>
      </section>
    </div>
  );
}

export default Calculator