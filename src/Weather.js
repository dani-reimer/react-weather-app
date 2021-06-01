import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Forecast from "./Forecast";
import WeatherData from "./WeatherData";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready : false });
 const [city, setCity] = useState(props.defaultCity);
  function showWeather(response) {
    
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
        wind: Math.round(response.data.wind.speed),
        humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
        icon: response.data.weather[0].icon
    });
  }
  function search() {
     const apiKey = "afd2be167f88dd904bc213780db71233";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCity(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Body">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-6 first-column">
                  <form onSubmit={handleSubmit} id="search-city" >
                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder="Enter City"
                      autoFocus="on"
                      onChange={handleCity}
        
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
                  </form>
        <p className="updated">
      Last updated:
      <br />
     <FormattedDate date={weatherData.date}/><br />
      
    </p></div><div className="col-6 WeatherData"> 
        
           
<div>
                  </div><WeatherData data={weatherData}/></div></div></div>
                  <div className="row forecast">
              <Forecast />
            </div>{" "}
          </div>
        </div>
      </div>
          
        
        
                   );
  }
  else {
    search();
    return "Loading...";
  }
  }

