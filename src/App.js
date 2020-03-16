import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import HomePage from "./components/pages/HomePage";
import DashBoard from "./components/pages/DashBoard";
import Activity from "./components/pages/Activity";
import Footer from "./components/layout/Footer";

export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/dashboard" component={DashBoard} />
            <Route exact path="/activity" component={Activity} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
