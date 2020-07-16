import React, { Component } from "react";

class FrontPageDescription extends Component {
  render() {
    return (
      <div className="front-page-desc-container">
        <span className="front-page-desc">{this.props.description}</span>
      </div>
    );
  }
}

export default FrontPageDescription;
