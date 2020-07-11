import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Menu from "./Components/Menu";
import Info from "./Components/Info";
import "./Styles/main.scss";
import "./Styles/material-ui.scss";

function App() {
  return (
    <div className="App">
      <Header title="Oakleigh South Fish and Chips" />
      <Hero />
      <body>
        <Menu />
        <Info address="14 Old Dandenong Road Oakleigh South 3167" phoneNo="9570 2222" />
      </body>
    </div>
  );
}

export default App;
