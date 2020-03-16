import React from "react";
import FaceBookIcon from "../../img/icon-facebook.svg";
import InstagramIcon from "../../img/icon-instagram.svg";
import PinterestIcon from "../../img/icon-pinterest.svg";
import TwitterIcon from "../../img/icon-twitter.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <h2> Dietify</h2>
        <p>
          Created with <span>&hearts; </span> by Oladokun Oladapo
        </p>
        <div>
          <img src={FaceBookIcon} alt="" />
          <img src={InstagramIcon} alt="" />
          <img src={PinterestIcon} alt="" />
          <img src={TwitterIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
