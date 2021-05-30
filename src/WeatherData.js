import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherData(props) {
    return (
        <div>
        <div className="WeatherData"> 
        <p className="updated">
      Last updated:
      <br />
     <FormattedDate date={props.data.date}/><br />
      
    </p>
        </div>
           
<div className="col-6 current-temperature-section">
<div className="current-temperature-section">
      <h2>{props.data.city}</h2>
      <div className="row">
        <div className="right-temperature-details">
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="weatherIcon"
          />
        </div>
        <div className="right-temperature-details">
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
                </div>
        </div>

    );
}