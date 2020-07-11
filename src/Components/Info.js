import React, { Component } from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import "../Styles/info.scss";
import { styled } from "@material-ui/styles";

class Info extends Component {
  render() {
    return (
      <section className="info-container">
        <div className="main-wrapper">
          <div className="inner-info-container">
            <div className="location-info">
              <LocationOnIcon className="icon" style={{ color: "white" }} /> <p>{this.props.address}</p>
            </div>
            <div className="phone-info">
              <PhoneIcon className="icon" style={{ color: "white" }} /> <p>{this.props.phoneNo}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Info;
