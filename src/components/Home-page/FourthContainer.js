import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class FourthContainer extends Component {
  render() {
    return (
      <div className="subscribe">
        <h2 id="fourth-h2">10% Discount for your subscription</h2>
        <h3 id="fourth-h3">
          Carry the day in with whis extra-large tote crafted in our chic B.B.
          Collection textured PVC. Featuring colorful faux leather trim, this
          tote offers a roomy interior.
        </h3>
        <form action="" method="POST">
          <div className="input-icons">
            <FontAwesomeIcon id="icon" icon={faEnvelope} />
            <input
              type="text"
              name="email"
              className="email"
              placeholder="Your e-mail here"
            />
            <button className="sub">Subscribe</button>
          </div>
        </form>
      </div>
    );
  }
}
export default FourthContainer;
