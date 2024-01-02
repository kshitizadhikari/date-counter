import { useState } from "react";
import "./App.css";

function App() {
  let [Count, changeCount] = useState(1);

  function decreaseCount(count) {
    if (Count > 1) changeCount((Count = Count - 1));
  }
  function increaseCount(count) {
    if (Count < 100) changeCount((Count = Count + 1));
  }

  return (
    <div className="container">
      <div className="mainBox">
        <div className="subBox">
          <button className="decreaseBtn"> - </button>
          <p>Step : 2</p>
          <button className="increaseBtn"> + </button>
        </div>
        <div className="subBox">
          <button className="decreaseBtn" onClick={decreaseCount}>
            {" "}
            -{" "}
          </button>
          <p>Count : {Count}</p>
          <button className="increaseBtn" onClick={increaseCount}>
            +
          </button>
        </div>
        <div className="text">
          <p>2 days from today is Thursday Jan 4 2023</p>
        </div>
      </div>
    </div>
  );
}

export default App;
