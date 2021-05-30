import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Forecast from "./Forecast";
import WeatherData from "./WeatherData";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready : false });
 
  function showWeather(response) {
    
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
        wind: Math.round(response.data.wind.speed),
        humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
        icon: "http://openweathermap.org/img/wn/01d@2x.png"
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Body">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-6 first-column">
                  <form id="search-city">
                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder="Enter City"
                      autoFocus="on"
        
                    />
                    <div className="btn-group">
                      <button
                        type="submit"
                        className="btn btn-primary btn-sm"
                      >
                        Search
        </button>
                      <button
                        type="button"
                        className="btn btn-success btn-sm"
                      >
                        Locate Me
        </button>
                    </div>{" "}
                  </form></div>
                  <WeatherData data={weatherData}/>
                  <div className="row forecast">
              <Forecast />
            </div>{" "}
          </div>
        </div>
      </div >
          </div>
        </div>
        
                   );
  }
  else {
    const apiKey = "afd2be167f88dd904bc213780db71233";
    let city = props.defaultCity;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(showWeather);
    return "Loading...";
  }
  }

