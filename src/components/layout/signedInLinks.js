import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul>
      {/* <li>
        <NavLink to="/"> Blog</NavLink>
      </li>
      <li>
        <NavLink to="/">About </NavLink>
      </li>
      <li>
        <NavLink to="/">Contact </NavLink>
      </li> */}
      <li>
        <NavLink to="/signin"> Login </NavLink>
      </li>

      <NavLink to="/signup">
        <button> Sign Up</button>
      </NavLink>
    </ul>
  );
};

export default SignedInLinks;
