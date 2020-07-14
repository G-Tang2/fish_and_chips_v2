import React, { Component } from "react";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderedResponse: "",
    };
  }

  callAPI() {
    fetch("/api/category")
      .then((res) => res.text())
      .then((res) => this.setState({ renderedResponse: res }));
  }

  getResponse = async () => {
    const response = await fetch("/api/category");
    console.log(response);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return <section className="main-wrapper">{this.state.renderedResponse}</section>;
  }
}

export default Menu;
