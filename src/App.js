import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import "./Styles/main.scss";

function App() {
  return (
    <div className="App">
      <Header title="Oakleigh South Fish and Chips" />
      <Hero />
      <body className="main-wrapper">
        <h4>body</h4>
      </body>
    </div>
  );
}

export default App;
