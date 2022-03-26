import React from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/hero-one/Hero";
import MainContentTabs from "../../components/hero/hero-one/MainContentTabs";

const HomeOneLight = () => {
  document.body.classList.add("light");
  return (
    <>
      {/* <!-- TOPBAR --> */}
      <div className="know_tm_topbar">
        <div className="container">
          <Header />
        </div>
      </div>
      {/* <!-- /TOPBAR --> */}

      {/* <!-- HERO --> */}
      <Hero />
      {/* <!-- /Hero --> */}

      {/* <!-- MAIN  CONTENT --> */}
      <div className="container">
        <MainContentTabs />
      </div>
      {/* <!-- MAIN  CONTENT --> */}
    </>
  );
};

export default HomeOneLight;
