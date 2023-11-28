import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
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