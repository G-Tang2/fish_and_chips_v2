import React, { Component } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FrontPageDescription from "./components/FrontPageDescription";
import Menu from "./components/Menu";
import Images from "./components/Images";
import Info from "./components/Info";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./stylesheets/main.scss";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  MuiButton: {
    root: {
      fontFamily: ["Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
    },
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.headerRef = React.createRef();
    this.menuRef = React.createRef();
    this.infoRef = React.createRef();
    this.contactRef = React.createRef();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header heading="Oakleigh South Fish and Chips" ref={this.headerRef} menuRef={this.menuRef} infoRef={this.infoRef} contactRef={this.contactRef} />
          <Hero />
          <FrontPageDescription description="Freshly cooked in 100% cholesterol free vegetable oil" />
          <div className="menu" ref={this.menuRef}>
            <Menu heading="Menu" headerRef={this.headerRef} />
          </div>
          <Images />
          <div ref={this.infoRef}>
            <Info heading="Info" address="14 Old Dandenong Road Oakleigh South 3167" phoneNo="9570 2222" openHrHeading="Opening Hours" />
          </div>
          <div className="contact" ref={this.contactRef}>
            <ContactForm />
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
