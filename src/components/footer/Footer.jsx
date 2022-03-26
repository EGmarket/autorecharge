import React from "react";

const Footer = () => {
  return (
    <>
      <div className="inner">
        <div className="left">
          <p>
            Designed with love &copy; {new Date().getFullYear()} by{" "}
            <a href="https://themeforest.net/user/ib-themes" target="_blank">
              Md. Asaduzzaman{" "}
            </a>
            All right reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
