import React from "react";
import Skycons from "react-skycons";

export const getDate = (time) => {
  const date = new Date(time * 1000);
  const month = date.getMonth() + 1;
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const day = days[date.getDay()];
  const day_num = date.getDate();

  return (
    <>
      <div className="day_name">{day}</div>
      <div className="day_date">
        {month}/{day_num}
      </div>
    </>
  );
};

export const getIcon = (data) => {
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
    <Skycons
      color="#91C3FF"
      icon={setIcon(data)}
      autoplay={true}
      style={{ height: "40px", width: "80px" }}
    />
  );
};

export const getSmallIcon = (data) => {
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
    <Skycons
      color="#91C3FF"
      icon={setIcon(data)}
      autoplay={true}
      style={{ height: "20px", width: "40px" }}
    />
  );
};

export const getHour = (time) => {
  let date = new Date(time * 1000);
  let hour = date.getHours();
  let ampm = hour >= 12 ? "PM" : "AM";

  hour = hour % 12;
  hour = hour ? hour : 12;

  let formattedHour = hour + " " + ampm;

  return (
    <>
      <div className="hour">{formattedHour}</div>
    </>
  );
};
