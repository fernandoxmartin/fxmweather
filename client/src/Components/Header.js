import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { searchIsOpen: false };
  }

  toggleSearch = () => {
    this.setState((prevState) => ({
      searchIsOpen: !prevState.searchIsOpen,
    }));
  };

  render() {
    return (
      <header>
        <div className="header-container">
          <h2>fxm weather</h2>
          <form>
            <input
              className={this.state.searchIsOpen ? "true" : "false"}
            ></input>
            <span className="focus-border"></span>
          </form>
          <div className="search-button">
            <FontAwesomeIcon icon={faSearch} onClick={this.toggleSearch} />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
