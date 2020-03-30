import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul>
      <li>
        <NavLink to="/dashboard"> Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/activity">Activity </NavLink>
      </li>
      <li>
        <NavLink to="/">Settings </NavLink>
      </li>
      <li>
        <NavLink to="/"> Contact Us </NavLink>
      </li>
      <li>
        <NavLink to="/"> Logout</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
