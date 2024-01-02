import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="mainBox">
        <div className="stepBox">
          <button className="decreaseBtn"> - </button>
          <p>Step : 2</p>
          <button className="increaseBtn"> + </button>
        </div>
        <div className="countBox">
          <button className="decreaseBtn"> - </button>
          <p>Count : 1</p>
          <button className="decreaseBtn"> + </button>
        </div>
      </div>
    </div>
  );
}

export default App;
