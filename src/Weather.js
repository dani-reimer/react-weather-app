import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Forecast from "./Forecast";
import Updated from "./Updated";
import CurrentTemperature from "./CurrentTemperature";

export default function Weather(props) {
 const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
 
  function showWeather(response) {
    setTemperature(Math.round(response.data.main.temp));
    setReady(true); 
  }

  if (ready) {
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
                  </form>
                   <Updated />
                </div>

                <div className="col-6 current-temperature-section">
                  <CurrentTemperature />
                </div>
              </div>
            </div>
            <div className="row forecast">
              <Forecast />
            </div>{" "}
          </div>
        </div>
      </div>
    );
  }
  else {
    const apiKey = "afd2be167f88dd904bc213780db71233";
    let city = "london";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(showWeather);
    return "Loading...";
  }
  }

