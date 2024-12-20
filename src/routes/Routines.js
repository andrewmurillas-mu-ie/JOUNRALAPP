import React from "react";
import TimerApp from "../components/TimerApp";

function Routines(props) {
  return (
    <>
      <h2>This is Analytics</h2>
      <h3>Variable from home page (parent) has value {props.theVar}</h3>
    </>
  );
}

export default Routines;
