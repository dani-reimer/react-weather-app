import React, { useState } from "react";
import "./Weather.css";
import "./App.css";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    if (unit === "celsius") {
        return (
            <div>
                <strong><span className="currentTemp">{props.celsius}</span>
                <sup>
                    {" "}
              ℃
            {" "}
            |{" "}
                </sup>
                <sup>
                    <a href="/" onClick={showFahrenheit}>℉</a>
                </sup></strong>
            </div>
        );
    } else {
        let fahrenheit = Math.round(props.celsius * 9 / 5) + 32;
        return (
            <div>
                <span className="currentTemp">{fahrenheit}</span>
                <sup>
                    {" "}
                    <a href="/" onClick={showCelsius}>℃</a>
                    {" "}
            |{" "}
                </sup>
                <sup>
                    ℉
          </sup>
            </div>
        );
    }
}