import React, { Component } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FrontPageDescription from "./components/FrontPageDescription";
import Menu from "./components/Menu";
import Info from "./components/Info";
import Contact from "./components/Contact";
import "./stylesheets/main.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.headerRef = React.createRef();
    this.menuRef = React.createRef();
    this.infoRef = React.createRef();
  }

  render() {
    return (
      <div className="App">
        <Header heading="Oakleigh South Fish and Chips" getMenu={() => this.menuRef} getInfo={() => this.infoRef} ref={this.headerRef} />
        <Hero />
        <FrontPageDescription description="Freshly cooked in 100% cholesterol free vegetable oil" />
        <div ref={this.menuRef}>
          <Menu heading="Menu" getHeader={() => this.headerRef} />
        </div>
        <div ref={this.infoRef}>
          <Info heading="Info" address="14 Old Dandenong Road Oakleigh South 3167" phoneNo="9570 2222" openHrHeading="Opening Hours" />
        </div>
      </div>
    );
  }
}

export default App;
