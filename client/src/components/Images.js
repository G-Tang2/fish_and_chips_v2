import React, { Component } from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";

class Images extends Component {
  render() {
    return (
      <div className="image-container">
        <img className="food-image" src={img1} />
        <img className="food-image" src={img2} />
        <img className="food-image" src={img3} />
      </div>
    );
  }
}

export default Images;
