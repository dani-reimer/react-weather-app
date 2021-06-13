import React from "react";
import "./Forecast.css";
import ForecastDate from "./ForecastDate";

export default function Forecast(props) {
  return (
    <div className="row forecast">
      <ForecastDate coordinates={props.coordinates} />
     
    </div>);
}