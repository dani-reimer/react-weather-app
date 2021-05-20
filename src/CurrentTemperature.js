import React from "react";

export default function CurrentTemperature() {
  let weatherData = {
    city: "New York",
    temperature: "26",
    description: "Showers",
    humidity: "80%",
    wind: "2",
    imgUrl: "https://openweathermap.org/img/wn/10d@2x.png"
  };
  return (
    <div>
      <h2>{weatherData.city}</h2>
      <div className="row">
        <div className="col-6 right-temperature-details">
          <img
            src={weatherData.imgUrl}
            alt={weatherData.description}
            className="weatherIcon"
          />
        </div>
        <div className="col-6 right-temperature-details">
          <span className="currentTemp">{weatherData.temperature}</span>
          <sup>
            <a href="#" class="active">
              {" "}
              ℃
            </a>{" "}
            |{" "}
          </sup>
          <sup>
            <a href="#">℉</a>
          </sup>
        </div>
        <h4 className="weatherDescription">{weatherData.description}</h4>
      </div>
      <div className="humidity">
        Humidity: {weatherData.humidity}
        <br />
        Wind: {weatherData.wind}{" "}
        <a href="/" className="active">
          km/h
        </a>{" "}
        | <a href="/">mph</a>
      </div>
    </div>
  );
}
