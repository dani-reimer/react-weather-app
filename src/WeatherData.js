import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherData(props) {
    return (
        <div className="current-temperature-section">
      <h2>{props.data.city}</h2>
      <div className="row">
                <div className="col-6 right-temperature-details">
                    <WeatherIcon code={props.data.icon} description={props.data.description}/>
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
        
        <h4 className="weatherDescription">{props.data.description}</h4>
      </div>
      <div className="humidity">
        Humidity: {props.data.humidity}%
        <br />
        Wind: {props.data.wind}{" "}
        
          km/h
        {" "}
        | mph
      </div></div>
                </div>
    );
}