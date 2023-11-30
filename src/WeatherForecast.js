import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {

  let [loaded, setLoaded] = useState(false);
  setForecast(response.data.daily);
    setLoaded(true);

  } 

  if (loaded) {
    return (
      <div className="WeatherForecast" >
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast[0]} />
          </div>
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
