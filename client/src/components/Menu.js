import React, { Component } from "react";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      items: [],
    };
  }

  getCategories() {
    fetch("/api/category")
      .then((res) => res.json())
      .then((res) => this.setState({ categories: res }));
  }

  getItems(category) {
    fetch(`/api/${category.category_id}/item`).then((res) => res.text());
  }

  // getItems() {
  //   this.state.categories.forEach((element) =>
  //     fetch(`/api/${category.category_id}/item`)
  //       .then((res) => res.json())
  //       .then((res) => this.setState({items: res}))
  // }

  componentDidMount() {
    this.getCategories();
  }

  categoryBlock() {
    return this.state.categories.map((category) => (
      <div>
        <div>{category.category_name}</div>
        <div>{this.getItems(category)}</div>
      </div>
    ));
  }

  render() {
    let categ = this.categoryBlock();
    return <section className="main-wrapper">{categ}</section>;
  }
}

export default Menu;
