import React from "react";

const History = ({clearHistory, history}) => {
  return (
    <div className="history">
      <div className="title">
        <p>History</p>
        <p onClick={clearHistory}>Delete</p>
      </div>

      <div className="results">
        {history.map((data) => {
          return <div>{data}</div>;
        })}
      </div>
    </div>
  );
};

export default History;
