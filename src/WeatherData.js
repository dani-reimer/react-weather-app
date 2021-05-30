import React from "react";


export default function WeatherData(props) {
    return (
        <div className="current-temperature-section">
      <h2>{props.data.city}</h2>
      <div className="row">
        <div className="col-6 right-temperature-details">
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="weatherIcon"
          />
        </div>
        <div className="col-6 right-temperature-details">
          <span className="currentTemp">{props.data.temperature}</span>
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
        <h4 className="weatherDescription">{props.data.description}</h4>
      </div>
      <div className="humidity">
        Humidity: {props.data.humidity}
        <br />
        Wind: {props.data.wind}{" "}
        
          km/h
        {" "}
        | mph
      </div>
                </div>
    );
}