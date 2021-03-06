import React from "react";
import "./WeatherIcon.css";

export default function WeatherIcon(props) {
    const codeMapping = {
        "01d": "https://basmilius.github.io/weather-icons/production/fill/all/clear-day.svg",
        "01n": "https://basmilius.github.io/weather-icons/production/fill/all/clear-night.svg",
        "02d": 'https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-day.svg',
    "02n": 'https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-night.svg',
     "03d": 'https://basmilius.github.io/weather-icons/production/fill/all/cloudy.svg',
        "03n": 'https://basmilius.github.io/weather-icons/production/fill/all/overcast-night.svg',
        "04d": 'https://basmilius.github.io/weather-icons/production/fill/all/overcast.svg',
        "04n": 'https://basmilius.github.io/weather-icons/production/fill/all/overcast-night.svg',
     "09d": 'https://basmilius.github.io/weather-icons/production/fill/all/drizzle.svg',
        "09n": 'https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-night-drizzle.svg',
     "10d": 'https://basmilius.github.io/weather-icons/production/fill/all/rain.svg',
        "10n": 'https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-night-rain.svg',
     "11d": 'https://basmilius.github.io/weather-icons/production/fill/all/thunderstorms.svg',
        "11n": 'https://basmilius.github.io/weather-icons/production/fill/all/thunderstorms.svg',
     "13d": 'https://basmilius.github.io/weather-icons/production/fill/all/snow.svg',
        "13n": 'https://basmilius.github.io/weather-icons/production/fill/all/snow.svg',
     "50d": 'https://basmilius.github.io/weather-icons/production/fill/all/fog.svg',
    "50n": 'https://basmilius.github.io/weather-icons/production/fill/all/fog.svg'

    }
    return (
       <img src={codeMapping[props.code]} alt={props.description} className="WeatherIcon" />         
);}