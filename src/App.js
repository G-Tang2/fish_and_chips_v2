import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Info from "./components/Info";
import "./stylesheets/main.scss";

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
