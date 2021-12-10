import React, { useState } from "react";
import "./styles.css";

var primarycolor = "green";

const vehicleDictonary = {
  "🚅": "Bullet train",
  "🚓": "Police Car",
  "🚜": "Tractor",
  "🚲": "Bicycle",
  "🚤": "Sailboat",
  "🚀": "Rocket",
  "🚗": "Car",
  "🚎": "Trolley Bus"
};

var vehiclewehave = Object.keys(vehicleDictonary);

export default function App() {
  const [meaning, setmeaning] = useState("");

  function inputhandler(event) {
    var userInput = event.target.value;
    var meaning = vehicleDictonary[userInput];
    setmeaning(meaning);
  }
  function clickhandler(vehicle) {
    var meaning = vehicleDictonary[vehicle];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>
        KYV-Know your <span style={{ color: primarycolor }}>vehicle</span>
      </h1>

      <input onChange={inputhandler} />

      <h2> {meaning} </h2>

      <h3>Automobiles we have</h3>
      {vehiclewehave.map(function (vehicle) {
        return (
          <span
            onClick={() => clickhandler(vehicle)}
            style={{ padding: "0.5rem", fontSize: "2rem", cursor: "pointer" }}
            key="vehicle"
          >
            {vehicle}
          </span>
        );
      })}
    </div>
  );
}
