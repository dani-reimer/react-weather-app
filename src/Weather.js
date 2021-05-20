import React from "react";
import axios from 'axios';

export default function Weather() {
    function showWeather(response) {
        alert(`The weather in New York is ${Math.round(response.data.main.temp)} degrees celcius.`)
    }
    let apiKey="afd2be167f88dd904bc213780db71233";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(showWeather);
    return (
        <div>This is the weather</div>)
}