import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
    }
    return (
        <div>
            <WeatherIcon code={props.data.weather[0].icon} />
            <br /> {day()}<br /> <span><strong>  {Math.round(props.data.temp.max)} ℃ </strong>| {Math.round(props.data.temp.min)}℃</span>
        </div>
    )
}