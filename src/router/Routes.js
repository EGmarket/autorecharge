import React from "react";
import Preview from "../views/Preview";
import HomeOneLight from "../views/all-home-version/HomeOneLight";
import HomeTwoLight from "../views/all-home-version/HomeTwoLight";
import HomeThreeLight from "../views/all-home-version/HomeThreeLight";
import HomeOneDark from "../views/all-home-version/HomeOneDark";
import HomeTwoDark from "../views/all-home-version/HomeTwoDark";
import HomeThreeDark from "../views/all-home-version/HomeThreeDark";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route exact path="/" component={HomeOneDark} />
          <Route path="/home-one-light" component={HomeOneLight} />
          <Route path="/home-two-light" component={HomeTwoLight} />
          <Route path="/home-three-light" component={HomeThreeLight} />
          <Route path="/home-one-dark" component={HomeOneDark} />
          <Route path="/home-two-dark" component={HomeTwoDark} />
          <Route path="/home-three-dark" component={HomeThreeDark} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
