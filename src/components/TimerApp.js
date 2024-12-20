import React, { useState, useEffect } from "react";
import "./TimerApp.css";

function TimerApp() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    let interval = null;
    if (isActive && !isPaused) {
      interval = setInterval(() => setTime((prev) => prev + 1000), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  const start = () => {
    setIsPaused(false);
  };

  const stop = () => {
    setIsPaused(true);
    addCard();
  };

  const togglePlayPause = () => {
    if (isPaused) setIsActive(true);
    setIsPaused(!isPaused);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsPaused(true);
    setTime(0);
  };

  const addItem = () => {
    if (!name) return alert("Enter a valid activity name.");
    if (time <= 0) return alert("Run the timer before adding an item.");
    setList([...list, { name, duration: Math.floor(time / 1000) }]);
    setName("");
  };

  return (
    <div className="card-container">
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter activity name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addItem}>Add Activity</button>
      </div>
      <div className="list-section">
        <h3> Added Activities </h3>
        <ul>
          {list.map((item, idx) => (
            <li key={idx}>
              <span>{item.name}</span>
              <span>{item.duration}s</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="button-container">
        <div className="button-display">
          {Math.floor(time / 3600000)}h{Math.floor((time % 3600000) / 60000)}m
          {Math.floor((time % 60000) / 1000)}s
        </div>
        <div
          className={`button-status-icon ${
            isPaused ? "triangle-icon" : "square-icon"
          }`}
          onClick={togglePlayPause}
        >
          {isPaused ? (
            <div className="button-triangle"></div>
          ) : (
            <div className="button-inner-square"></div>
          )}
        </div>
        <button onClick={resetTimer} className="button-reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default TimerApp;
