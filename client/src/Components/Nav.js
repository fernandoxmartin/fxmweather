import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faCalendarWeek,
  faClock,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { nav } from "./Actions/index";
import "../Styles/Nav.scss";

const Nav = (props) => {
  const [tabs, setTabs] = useState([]);
  const NavOptions = useSelector((state) => state.navReducer);
  useEffect(() => {
    setTabs(NavOptions);
  }, [NavOptions]);

  const toggleActiveStyle = (index) => {
    if (NavOptions[index].active === true) {
      return "option active";
    } else {
      return "option";
    }
  };

  const icon = (index) => {
    switch (index) {
      case 0:
        return faSun;
      case 1:
        return faCalendarWeek;
      case 2:
        return faClock;
      case 3:
        return faCog;
      default:
        return null;
    }
  };

  const dispatch = useDispatch();

  return (
    <nav>
      <div className="navbar">
        <div className="navlinks">
          {tabs.map((options, index) => (
            <div
              key={index}
              className={toggleActiveStyle(index)}
              onClick={() => {
                dispatch(nav(index));
              }}
            >
              <FontAwesomeIcon className="icon" icon={icon(index)} />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
