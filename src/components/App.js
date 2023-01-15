import React from "react";

const INITIAL_STATE = ["Dinesh", "Ramesh", "Suresh"];

const App = () => {
  return (
    <div id="main">
      <ol>
        {INITIAL_STATE.map((relative) => {
          return <li key={relative}>{relative}</li>;
        })}
      </ol>
    </div>
  );
};

export default App;
