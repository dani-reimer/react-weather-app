import React, { useState } from "react";
import "./CurrentTemperature.css";
import axios from "axios";

export default function CurrentTemperature() {
  let weatherData = {
    city: "New York",
    temperature: "26",
    description: "Showers",
    humidity: "80%",
    wind: "2",
    imgUrl: "https://openweathermap.org/img/wn/10d@2x.png"
  };
  return (
    <div className="current-temperature-section">
      <h2>{weatherData.city}</h2>
      <div className="row">
        <div className="right-temperature-details">
          <img
            src={weatherData.imgUrl}
            alt={weatherData.description}
            className="weatherIcon"
          />
        </div>
        <div className="right-temperature-details">
          <span className="currentTemp">{weatherData.temperature}</span>
          <sup>
            
              {" "}
              ℃
            {" "}
            |{" "}
          </sup>
          <sup>
            ℉
          </sup>
        </div>
        <h4 className="weatherDescription">{weatherData.description}</h4>
      </div>
      <div className="humidity">
        Humidity: {weatherData.humidity}
        <br />
        Wind: {weatherData.wind}{" "}
        
          km/h
        {" "}
        | mph
      </div>
    </div>
  );
}
