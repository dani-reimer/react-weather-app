import React from "react";
import "./ForecastDate.css";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDate() {
    return (
        <div className="col-2">
            <WeatherIcon />
            <br /> Mon 22 <br /> <strong>  2 ℃ </strong>| ℉
        </div>);
}