import React from "react";
import { Link } from "react-router-dom";
import "./signedInLinks";
import SignedInLinks from "./signedInLinks";
import MenuIcon from "@material-ui/icons/Menu";

const NavBar = () => {
  return (
    <nav className=" container navbar ">
      <Link className=" brand-logo" to="/">
        Dietify
      </Link>
      <SignedInLinks />
      <MenuIcon />
    </nav>
  );
};

export default NavBar;
