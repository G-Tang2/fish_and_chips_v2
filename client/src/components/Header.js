import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import NavBar from "./NavBar";

class Header extends Component {
  constructor(props) {
    super(props);
    this.resizeHeaderOnScroll = this.resizeHeaderOnScroll.bind(this);
    this.headerRef = React.createRef();
    this.state = {
      topOfPage: true,
    };
  }

  resizeHeaderOnScroll() {
    if (window.pageYOffset === 0 && this.state.topOfPage === false) {
      this.setState({ topOfPage: true });
    } else if (window.pageYOffset > 0 && this.state.topOfPage === true) {
      this.setState({ topOfPage: false });
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.resizeHeaderOnScroll);
  }

  render() {
    return (
      <AppBar className={this.state.topOfPage ? "header-expanded" : "header"} color="primary" position="static" ref={this.headerRef}>
        <div className="main-wrapper">
          <Toolbar className="heading-inner-container" disableGutters>
            <h3 className={this.state.topOfPage ? "header-heading-expanded" : "header-heading"}>{this.props.heading}</h3>
            <NavBar menuRef={this.props.menuRef} infoRef={this.props.infoRef} contactRef={this.props.contactRef} headerRef={this.headerRef} topOfPage={this.state.topOfPage} />
          </Toolbar>
        </div>
      </AppBar>
    );
  }
}

export default Header;
