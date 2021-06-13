import axios from "axios";
import React, { useState } from "react";
import "./ForecastDate.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function ForecastDate(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        console.log(response.data.daily);
        setForecast(response.data.daily);
        setLoaded(true);
    }
    if (loaded) {
        return (
            <div className="row">
        <div className="col">
                <WeatherForecastDay data={forecast[0]}/>
            </div>
            <div className="col">
                <WeatherForecastDay data={forecast[1]}/>
                </div>
                <div className="col">
                <WeatherForecastDay data={forecast[2]}/>
                </div>
                <div className="col">
                <WeatherForecastDay data={forecast[3]}/>
                </div>
            </div>
        );
    } else {

    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiKey = "afd2be167f88dd904bc213780db71233";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely,current&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
        return (null);
    }
    
}