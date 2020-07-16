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
        <Header title="Oakleigh South Fish and Chips" />
        <Hero />
        <FrontPageDescription description="Cooked in 100% cholesterol free vegetable oil" />
        <Menu title="MENU" />
        <Info address="14 Old Dandenong Road Oakleigh South 3167" phoneNo="9570 2222" />
      </div>
    );
  }
}

export default App;
