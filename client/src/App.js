import React from "react";
import Home from "./Components/Home";
import Weather from "./Components/Weather";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Styles/Global.scss";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/weather" exact component={Weather} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
