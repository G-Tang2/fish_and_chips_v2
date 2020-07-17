import React, { Component } from "react";
import MenuBody from "./MenuBody";

class Menu extends Component {
  render() {
    return (
      <section className="main-wrapper">
        <div className="menu-container">
          <div className="title">
            <h1>{this.props.title.toUpperCase()}</h1>
          </div>
          <div className="menu-body">
            <MenuBody />
          </div>
        </div>
      </section>
    );
  }
}

export default Menu;
