import React from "react";

const INITIAL_STATE = ["Dinesh", "Ramesh", "Suresh"];

const App = () => {
  return (
    <div id="main">
      <ol key="relativeList">
        {INITIAL_STATE?.map((relative, idx) => {
          return <li key={relative}>{relative}</li>;
        })}
      </ol>
    </div>
  );
};

export default App;
