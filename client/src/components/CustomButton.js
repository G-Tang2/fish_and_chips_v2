import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        padding: "10px 15px",
        color: "white",
        fontSize: "17px",
        transition: "300ms ease-in-out",
      },
      label: {
        fontFamily: ["Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
      },
    },
  },
});

class CustomButton extends Component {
  scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  scrollTo = (ref) => {
    console.log(ref);
    const headerRef = this.props.headerRef;
    window.scrollTo(0, ref.current.offsetTop - headerRef.current.offsetHeight + 1); // extra pixel to offset border
  };
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Button className={this.props.topOfPage ? "nav-link-expanded" : "nav-link"} onClick={() => (this.props.aRef == null ? this.scrollToTop() : this.scrollTo(this.props.aRef))}>
          {this.props.text}
        </Button>
      </ThemeProvider>
    );
  }
}

export default CustomButton;
