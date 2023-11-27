import React, { useState } from "react";
import axios from "axios";
import FormatDate from "./FormatDate";

export default function Weather() {
  let [city, setCity] = useState(" ");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  function showTemperature(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
      date: new Date(response.data.dt * 1000)
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div>
    <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9 p-0">
            <input type="search" placeholder="Type a city" onChange={updateCity} className="form-control"/>
          </div>
          <div className="col-3 ps-0">
            <input type="submit" value="search" className="btn btn-primary w-100"/>
          </div>
        </div>
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <h2>{weather.city}</h2>
        <h3>{weather.description}</h3>
        <h3><FormatDate date={weather.date}/></h3>
        <h4>{Math.round(weather.temperature)}°C </h4>
        <ul>Humidity: {weather.humidity}% </ul>
        <ul>Wind: {weather.wind}km/h </ul>
        <img src={weather.icon} alt={weather.description} />
      </div>
    );
  } else {
    return form;
  }
}
