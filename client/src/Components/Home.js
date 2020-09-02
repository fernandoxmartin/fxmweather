import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { weather, locationName } from "./Actions/index";
import "../Styles/Home.scss";

const Home = (props) => {
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const apikey = process.env.REACT_APP_GOOGLE_KEY;
  const getGeolocation = (e) => {
    e.preventDefault();
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${apikey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (
          data.results.length < 1 ||
          !data.results[0].types.includes("locality")
        ) {
          setError("That location was not found! Enter a valid location.");
        } else {
          const { lat, lng } = data.results[0].geometry.location;
          dispatch(locationName(location));
          getWeather(lat, lng);
        }
      });
  };

  const getWeather = (lat, lng) => {
    axios
      .post("/", {
        lat,
        lng,
      })
      .then((res) => {
        dispatch(weather(res.data));
        if (res.data.code === 400) {
          setError(res.data.error);
        } else {
          props.history.push("/weather");
        }
      });
  };

  return (
    <>
      <div className="home-animation"></div>
      <div className="home">
        {error}
        <form className="form" onSubmit={getGeolocation}>
          <input
            type="text"
            name="location"
            placeholder="Los Angeles, CA"
            autoComplete="off"
            value={location}
            onChange={handleChange}
          />
          <span className="focus_border"></span>
        </form>
      </div>
    </>
  );
};

export default Home;
