import React from "react";
import { getHour, getSmallIcon } from "./getDate";
import "../Styles/Hourly.scss";

const Hourly = (props) => {
  const hourly = props.hourly.data;

  const hourlyData = hourly
    ? hourly.slice(0, 24).map((hour, index) => {
        return (
          <div className="hourly-container" key={index}>
            <div className="hour">{getHour(hour.time)}</div>
            <div className="hour-temp-container">
              <div
                className="hour-temp-bar"
                style={{ width: `${hour.temperature / 1.5}%` }}
              >
                {Math.round(hour.temperature)}
              </div>
            </div>
            <div className="hour-temp">{getSmallIcon(hour.icon)}</div>
          </div>
        );
      })
    : "n/a";

  return (
    <div className={props.isContainerActive}>
      <h1 className="header-title">Hourly Forecast</h1>
      <div className="outer-hourly-container">
        <div className="inner-hourly-container">{hourlyData}</div>
      </div>
    </div>
  );
};

export default Hourly;
