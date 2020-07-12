import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Info from "./components/Info";
import "./stylesheets/main.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
    };
  }
  async componentDidMount() {
    let r = await fetch("/api/item");
    let item = await r.json();
    this.setState({ item });
  }
  render() {
    return (
      <div className="App">
        <Header title="Oakleigh South Fish and Chips" />
        <Hero />
        <body>
          <Menu />
          <Info address="14 Old Dandenong Road Oakleigh South 3167" phoneNo="9570 2222" />
        </body>
        <div>{this.state.item}</div>
      </div>
    );
  }
}

export default App;
