import { useState } from "react";
import "./App.css";

function App() {
  const Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let [nextDay, setNextDay] = useState(3);
  let [Count, changeCount] = useState(1);
  let [Step, changeStep] = useState(1);
  let [Day, changeDay] = useState(Days[nextDay]);
  let [Date, setDate] = useState(3);
  let [currentMonth, setCurrentMonth] = useState(0);
  let [Month, setMonth] = useState(Months[currentMonth]);

  function decreaseCount() {
    changeCount((Count = Count - Step));
    setNextDay((nextDay = nextDay - Step));
    if (nextDay === -1) {
      setNextDay((nextDay = 6));
      changeDay((Day = Days[nextDay]));
    } else {
      changeDay((Day = Days[nextDay]));
    }

    setDate((Date = Date - Step));

    if (Date < 1) {
      setDate((Date = 32));
      setDate((Date = Date - Step));
      setCurrentMonth((currentMonth = currentMonth - 1));
      if (currentMonth < 0) {
        setCurrentMonth((currentMonth = 11));
        setMonth((Month = Months[currentMonth]));
      } else {
        setMonth((Month = Months[currentMonth - 1]));
      }
    }
  }
  function increaseCount() {
    if (Count < 100) {
      changeCount((Count = Count + Step));
      setNextDay((nextDay = nextDay + Step));
      if (nextDay === 7) {
        setNextDay((nextDay = 0));
        changeDay((Day = Days[nextDay]));
      } else {
        changeDay((Day = Days[nextDay]));
      }

      setDate((Date = Date + Step));

      if (Date > 31) {
        setDate((Date = 1));
        setDate((Date = Date + Step));
        setCurrentMonth((currentMonth = currentMonth + 1));
        if (currentMonth <= 11) {
          setMonth((Month = Months[currentMonth]));
        } else {
          setCurrentMonth((currentMonth = 0));
          setMonth((Month = Months[currentMonth]));
        }
      }
    }
  }

  function decreaseStep() {
    if (Step > 1) changeStep((Step = Step - 1));
  }
  function increaseStep() {
    if (Step < 100) changeStep((Step = Step + 1));
  }

  return (
    <div className="container">
      <div className="mainBox">
        <div className="subBox">
          <button className="decreaseBtn" onClick={decreaseStep}>
            {" "}
            -{" "}
          </button>
          <p>Step : {Step}</p>
          <button className="increaseBtn" onClick={increaseStep}>
            {" "}
            +{" "}
          </button>
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
          <p>
            {Count} days from today is {Day} {Month} {Date} 2023
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
