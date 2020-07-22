import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  scrollTo = (ref) => {
    const headerRef = this.props.headerRef;
    window.scrollTo(0, ref.current.offsetTop - headerRef.current.offsetHeight);
  };

  render() {
    return (
      <List component="nav">
        <ListItem component="div" disableGutters>
          <ListItemText>
            <Button className={this.props.topOfPage ? "nav-link-expanded" : "nav-link"} onClick={this.scrollToTop}>
              HOME
            </Button>
          </ListItemText>
          <ListItemText>
            <Button className={this.props.topOfPage ? "nav-link-expanded" : "nav-link"} onClick={() => this.scrollTo(this.props.getMenu())}>
              MENU
            </Button>
          </ListItemText>
          <ListItemText>
            <Button className={this.props.topOfPage ? "nav-link-expanded" : "nav-link"} onClick={() => this.scrollTo(this.props.getInfo())}>
              INFO
            </Button>
          </ListItemText>
          <ListItemText>
            <Button className={this.props.topOfPage ? "nav-link-expanded" : "nav-link"}>CONTACT US</Button>
          </ListItemText>
        </ListItem>
      </List>
    );
  }
}

export default NavBar;
