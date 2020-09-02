import React from "react";
import "../Styles/Forecast.scss";
import { getDate, getIcon } from "./getDate";

const Forecast = (props) => {
  const forecast = props.forecast.data;

  const daily = forecast
    ? forecast.map((day, index) => {
        return (
          <div className="day-container" key={index}>
            <div className="date">{getDate(day.time)}</div>
            <div className="date-icon">{getIcon(day.icon)}</div>
            <div className="date-temp">
              <span className="max">{Math.round(day.temperatureMax)}</span>/
              <span className="min">{Math.round(day.temperatureMin)}</span>
            </div>
          </div>
        );
      })
    : "n/a";

  return (
    <div className={props.isContainerActive}>
      <h1 className="header-title">Weekly Forecast</h1>
      <div className="outer-forecast-container">
        <div className="inner-forecast-container">{daily}</div>
      </div>
    </div>
  );
};

export default Forecast;
