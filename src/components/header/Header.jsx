import React from "react";
import Social from "../Social";
import { Link } from "react-router-dom";

const logo = "img/logo/dark.png";

const Header = () => {
  return (
    <div className="topbar_inner">
      <div className="logo">
        <Link to="/">
          {" "}
          <img src={logo} alt="brand" />
        </Link>
      </div>
      {/* End .logo */}

      <div className="right">
        <div className="social">
          <Social />
        </div>
        {/* End .social */}
        <div className="know_tm_button">
          <a href="img/cv/1.jpg" download>
            Download Offer
          </a>
        </div>
        {/* End download button */}
      </div>
    </div>
    // End .topbar_inner
  );
};

export default Header;
