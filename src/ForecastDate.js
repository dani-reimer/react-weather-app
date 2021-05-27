import React from "react";
import "./ForecastDate.css";

export default function ForecastDate() {
    return (
        <div className="col-2">
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="Weather Icon" className="forecast-icon"></img><br /> Mon 22 <br /> <strong>  2 ℃ </strong>| ℉
        </div>);
}