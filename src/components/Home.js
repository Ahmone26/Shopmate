import React, { Component } from "react";
import FirstContainer from "./Home-page/FirstContainer";
import SecondContainer from "./Home-page/SecondContainer";
import ThirdContainer from "./Home-page/ThirdContainer";
import FourthContainer from "./Home-page/FourthContainer";
import FifthContainer from "./Home-page/FifthContainer";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <FirstContainer />
        <div className="container2">
          <SecondContainer />
        </div>
        <ThirdContainer />
        <div className="fourth">
          <FourthContainer />
        </div>
        <div className="fifth">
          <FifthContainer />
        </div>
      </div>
    );
  }
}

export default Home;
