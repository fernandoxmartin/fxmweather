import React from "react";
import { useSelector } from "react-redux";
import "../Styles/Current.scss";
import Skycons from "react-skycons";

const Current = (props) => {
  const current = props.current;
  const location = useSelector((state) => state.locationReducer);
  const icon = props.current.icon;

  const setIcon = (icon) => {
    switch (icon) {
      case "clear-day":
        return "CLEAR_DAY";
      case "clear-night":
        return "CLEAR_NIGHT";
      case "rain":
        return "RAIN";
      case "snow":
        return "SNOW";
      case "sleet":
        return "SLEET";
      case "wind":
        return "WIND";
      case "fog":
        return "FOG";
      case "cloudy":
        return "CLOUDY";
      case "partly-cloudy-day":
        return "PARTLY_CLOUDY_DAY";
      case "partly-cloudy-night":
        return "PARTLY_CLOUDY_NIGHT";
      case "hail":
        return "HAIL";
      case "thunderstorm":
        return "THUNDERSTORM";
      case "tornado":
        return "TORNADO";
      default:
        return "CLEAR_DAY";
    }
  };

  return (
    <div className={props.isContainerActive}>
      <div className="current-weather">
        <h2>{location}</h2>
        <Skycons
          color="#ffffff"
          icon={setIcon(icon)}
          autoplay={true}
          style={{ height: "150px", width: "300px" }}
        />
        <h1>{Math.round(current.temperature)} &deg; F</h1>
      </div>
      <div className="current-details">
        <div className="detail-container">
          <div className="detail">
            <h3>Wind</h3>
            <h2>
              {Math.round(current.windSpeed)}{" "}
              <span className="current-unit">mph</span>
            </h2>
          </div>
          <div className="detail">
            <h3>Rain</h3>
            <h2>
              {current.precipProbability}{" "}
              <span className="current-unit">%</span>
            </h2>
          </div>
          <div className="detail">
            <h3>Pressure</h3>
            <h2>{Math.round(current.pressure)}</h2>
          </div>
          <div className="detail">
            <h3>Humidity</h3>
            <h2>
              {Math.round(current.humidity * 100)}{" "}
              <span className="current-unit">%</span>
            </h2>
          </div>
          <div className="detail">
            <h3>Visibility</h3>
            <h2>{current.visibility}</h2>
          </div>
          <div className="detail">
            <h3>uv index</h3>
            <h2>{current.uvIndex}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;
