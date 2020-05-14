import React, { Component } from "react";

class ThirdContainer extends Component {
  render() {
    return (
      <div className="thrd">
        <div className="thrd-1">
          <div className="thrd-1-1">
            <img src="/images/wow.png" alt="" className="wow" />
          </div>
          <div className="thrd-1-2">
            <img src="/images/men.png" alt="" className="men" />
          </div>
        </div>
        <div className="thrd-2">
          {/* <img src="/images/gymboy.png" alt="" className="gym" /> */}
          <div className="gymboy" />
          <button className="pop">POP</button>
          <h1>Let the Game begin</h1>
          <h3>Registration is on - get ready for the Open</h3>
          <button className="btn2">Register</button>
        </div>
      </div>
    );
  }
}
export default ThirdContainer;
