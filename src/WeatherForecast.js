import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  
    function handleResponse(response) {
    console.log(response.data);
  } 

  let apiKey = "094780c710fa4efd669f0df8c3991927";
  let long = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast" >
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Tue</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">
              19°
            </span>
            <span className="WeatherForecast-temperature-min">
              10°
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
