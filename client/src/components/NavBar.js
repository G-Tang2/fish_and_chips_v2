import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CustomButton from "./CustomButton";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  scrollTo = (ref) => {
    const headerRef = this.props.headerRef;
    window.scrollTo(0, ref.current.offsetTop - headerRef.current.offsetHeight + 1); // extra pixel to offset border
  };

  render() {
    return (
      <List component="nav">
        <ListItem component="div" disableGutters>
          <ListItemText>
            <CustomButton text={"HOME"} topOfPage={this.props.topOfPage} />
          </ListItemText>
          <ListItemText>
            <CustomButton text={"MENU"} topOfPage={this.props.topOfPage} aRef={this.props.menuRef} headerRef={this.props.headerRef} />
          </ListItemText>
          <ListItemText>
            <CustomButton text={"INFO"} topOfPage={this.props.topOfPage} aRef={this.props.infoRef} headerRef={this.props.headerRef} />
          </ListItemText>
          <ListItemText>
            <CustomButton text={"CONTACT"} topOfPage={this.props.topOfPage} aRef={this.props.contactRef} headerRef={this.props.headerRef} />
          </ListItemText>
        </ListItem>
      </List>
    );
  }
}

export default NavBar;
