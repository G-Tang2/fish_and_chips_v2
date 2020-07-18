import React, { Component } from "react";
import MenuBody from "./MenuBody";

class Menu extends Component {
  render() {
    return (
      <section className="main-wrapper">
        <div className="menu-container">
          <h1 className="heading">{this.props.heading.toUpperCase()}</h1>
          <div className="menu-body">
            <MenuBody />
          </div>
        </div>
      </section>
    );
  }
}

export default Menu;
