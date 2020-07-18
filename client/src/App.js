import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FrontPageDescription from "./components/FrontPageDescription";
import Menu from "./components/Menu";
import Info from "./components/Info";
import "./stylesheets/main.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header heading="Oakleigh South Fish and Chips" />
        <Hero />
        <FrontPageDescription description="Freshly cooked in 100% cholesterol free vegetable oil" />
        <Menu heading="Menu" />
        <Info heading="Info" address="14 Old Dandenong Road Oakleigh South 3167" phoneNo="9570 2222" openHrHeading="Opening Hours" />
      </div>
    );
  }
}

export default App;
