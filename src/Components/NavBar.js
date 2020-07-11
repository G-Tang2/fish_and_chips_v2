import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <List component="nav">
        <ListItem component="div" disableGutters>
          <ListItemText>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </ListItemText>
          <ListItemText>
            <NavLink to="/menu" className="nav-link">
              Menu
            </NavLink>
          </ListItemText>
          <ListItemText>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </ListItemText>
        </ListItem>
      </List>
    );
  }
}

export default NavBar;
