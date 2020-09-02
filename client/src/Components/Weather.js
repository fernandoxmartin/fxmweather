import React, { useEffect, useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Current from "./Current";
import Forecast from "./Forecast";
import Hourly from "./Hourly";
import Setting from "./Settings";
import "../Styles/Weather.scss";
import { useHistory } from "react-router-dom";

import { useSelector } from "react-redux";

const Weather = (props) => {
  const containers = useSelector((state) => state.navReducer);
  const activeContainer = containers.map((container) => {
    if (container.active === true) {
      return "container activeContainer";
    } else {
      return "container";
    }
  });

  const weather = useSelector((state) => state.weatherReducer[0]);
  const [current, setCurrent] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [hourly, setHourly] = useState([]);
  const history = useHistory();
  useEffect(() => {
    if (weather === undefined) {
      history.push("/");
    } else {
      setCurrent(weather.currently);
      setForecast(weather.daily);
      setHourly(weather.hourly);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="weather"></div>
      <Current isContainerActive={activeContainer[0]} current={current} />
      <Forecast isContainerActive={activeContainer[1]} forecast={forecast} />
      <Hourly isContainerActive={activeContainer[2]} hourly={hourly} />
      <Setting isContainerActive={activeContainer[3]} />
      <Nav />
    </>
  );
};

export default Weather;
