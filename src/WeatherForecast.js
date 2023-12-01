import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {

  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response){
  setForecast(response.data.daily);
    setLoaded(true);

  } 

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              ); 
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
      let apiKey = "094780c710fa4efd669f0df8c3991927";
      let long = props.coordinates.lon;
      let lat = props.coordinates.lat;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then(handleResponse);

      return null;
    }
}
