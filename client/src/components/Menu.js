import React, { Component } from "react";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderedResponse: "",
    };
  }

  getResponse = async () => {
    const response = await fetch("/api/item");
    console.log(response);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  componentDidMount() {
    this.getResponse()
      .then((res) => this.setState({ renderedResponse: res }))
      .catch((err) => console.log(err));
  }

  render() {
    return <section className="main-wrapper">{this.state.renderedResponse}</section>;
  }
}

export default Menu;
