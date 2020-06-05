import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import HomePage from "./components/pages/HomePage";
import DashBoard from "./components/pages/DashBoard";
import Activity from "./components/pages/Activity";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Footer from "./components/layout/Footer";

const App = function () {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/dashboard" component={DashBoard} />
          <Route exact path="/activity" component={Activity} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
