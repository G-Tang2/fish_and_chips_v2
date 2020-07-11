import React, { Component } from "react";
import TypoGraphy from "@material-ui/core/Typography";
import "../Styles/hero.scss";

class Hero extends Component {
  render() {
    return (
      <section className="hero-container">
        <div className="hero-image-container">
          <TypoGraphy variant="h2">
            Call us on <br></br>
            9570 2222
          </TypoGraphy>
        </div>
      </section>
    );
  }
}

export default Hero;
