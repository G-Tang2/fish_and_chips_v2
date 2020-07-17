import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Iframe from "../../node_modules/react-iframe/";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = { openingHours: [] };
  }

  getOpeningHours() {
    fetch("/api/open_hours")
      .then((res) => res.json())
      .then((res) => this.setState({ openingHours: res }));
  }

  openHours() {
    return this.state.openingHours.map((day) => (
      <div>
        <span>{day.open_hr_day}</span>
        <div></div>
        <span>
          {day.open_hour}-{day.close_hour}
        </span>
      </div>
    ));
  }

  storeInfo() {
    return (
      <Grid item xs={6} className="text-info-container">
        <div className="inner-text-info-container">
          <div className="location-info">
            <LocationOnIcon className="icon" /> <p>{this.props.address}</p>
          </div>
          <div className="phone-info">
            <PhoneIcon className="icon" /> <p>{this.props.phoneNo}</p>
          </div>
          {this.openHours()}
        </div>
      </Grid>
    );
  }

  componentDidMount() {
    this.getOpeningHours();
  }

  render() {
    return (
      <section className="info-container">
        <Grid container className="main-wrapper">
          <Grid item xs={12} className="title">
            <h1>{this.props.title.toUpperCase()}</h1>
          </Grid>
          {this.storeInfo()}
          <Grid item xs={6} className="google-maps-container">
            <Iframe
              className="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17802.756500507916!2d145.07022642821713!3d-37.927803090546604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66b97569a33f5%3A0xa01909dda5f84ed5!2s14%20Old%20Dandenong%20Rd%2C%20Oakleigh%20South%20VIC%203167!5e0!3m2!1sen!2sau!4v1578658571384!5m2!1sen!2sau"
              width="100%"
              height="400px"
              allowfullscreen=""
            />
          </Grid>
        </Grid>
      </section>
    );
  }
}

export default Info;
