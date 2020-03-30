import React from "react";
import { Link } from "react-router-dom";
import "./signedInLinks";
import SignedOutLinks from "./signedOutLinks";
import MenuIcon from "@material-ui/icons/Menu";

const NavBar = () => {
  return (
    <nav className=" container navbar ">
      <Link className=" brand-logo" to="/">
        Dietify
      </Link>
      <SignedOutLinks />
      <MenuIcon />
    </nav>
  );
};

export default NavBar;
