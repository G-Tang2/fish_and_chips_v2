import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TypoGraphy from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import NavBar from "./NavBar";

class Header extends Component {
  render() {
    return (
      <Router>
        <AppBar color="primary" position="static">
          <div className="main-wrapper">
            <Toolbar disableGutters>
              <TypoGraphy variant="h4" className="main-heading">
                {this.props.heading}
              </TypoGraphy>
              <NavBar />
            </Toolbar>
          </div>
        </AppBar>
      </Router>
    );
  }
}

export default Header;
