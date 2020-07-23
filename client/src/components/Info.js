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

  getOpeningHoursAPI() {
    fetch("/api/open_hours")
      .then((res) => res.json())
      .then((res) => this.setState({ openingHours: res }));
  }

  openHours() {
    return (
      <div className="open-hr-container">
        <h3 className="open-hr-heading">{this.props.openHrHeading.toUpperCase()}</h3>
        {this.state.openingHours.map((day) => (
          <div key={day.open_hr_no} className="open-hr-item-container">
            <div className="open-hr-day">{day.open_hr_day}</div>
            <div className="open-hr-time">
              {day.open_hour}-{day.close_hour}
            </div>
          </div>
        ))}
      </div>
    );
  }

  storeInfo() {
    return (
      <React.Fragment>
        <div className="store-info-container">
          <div className="location-info">
            <LocationOnIcon className="icon" /> <p>{this.props.address}</p>
          </div>
          <div className="phone-info">
            <PhoneIcon className="icon" /> <p>{this.props.phoneNo}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.getOpeningHoursAPI();
  }

  render() {
    return (
      <section className="info-container">
        <Grid container className="main-wrapper">
          <Grid className="heading" item xs={12}>
            <h1>{this.props.heading.toUpperCase()}</h1>
          </Grid>
          <Grid className="store-info-wrapper" item xs={12}>
            {this.storeInfo()}
          </Grid>
          <Grid className="open-hr-wrapper" item xs={6}>
            {this.openHours()}
          </Grid>
          <Grid className="google-maps-container" item xs={6}>
            <Iframe
              className="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17802.756500507916!2d145.07022642821713!3d-37.927803090546604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66b97569a33f5%3A0xa01909dda5f84ed5!2s14%20Old%20Dandenong%20Rd%2C%20Oakleigh%20South%20VIC%203167!5e0!3m2!1sen!2sau!4v1578658571384!5m2!1sen!2sau"
              width="90%"
              height="320px"
            />
          </Grid>
        </Grid>
      </section>
    );
  }
}

export default Info;
