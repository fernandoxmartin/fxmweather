import React from "react";
import "../Styles/Settings.scss";

const Setting = (props) => {
  return (
    <div className={props.isContainerActive}>
      <h1 className="header-title">Settings</h1>
      <div className="outer-setting-container">
        <div className="inner-setting-container">
          <form className="settings">
            <input type="radio" id="F" name="scale" value="F" />
            <label htmlFor="F">&deg;F</label>
            <input type="radio" id="C" name="scale" value="C" />
            <label htmlFor="C">&deg;C</label>
            <input type="radio" id="K" name="scale" value="K" />
            <label htmlFor="K">&deg;K</label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Setting;
