import React from "react";
import "./Updated.css";

export default function Updated() {
  let currentTime = {
    date: "April 25",
    time: "16:00"
  };
  return (
    <p className="updated">
      Last updated:
      <h5>
        {currentTime.date}
        <br />
        {currentTime.time}
      </h5>
    </p>
  );
}
