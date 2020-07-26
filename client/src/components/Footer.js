import React, { Component } from "react";

class Footer extends Component {
  render() {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="footer">
        <p>Copyright &copy; {currentYear} Oakleigh South Fish & Chips. All Rights Reserved.</p>
      </footer>
    );
  }
}

export default Footer;
