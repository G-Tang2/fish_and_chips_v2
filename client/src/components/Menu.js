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

  getItems() {
    fetch("/api/item")
      .then((res) => res.json())
      .then((res) => this.setState({ items: res }));
  }

  componentDidMount() {
    this.getCategories();
    this.getItems();
  }

  render() {
    console.log(this.state.categories);
    return (
      <section className="main-wrapper">
        <div>
          {this.state.categories.map((category) => (
            <div>{category.category_name}</div>
          ))}
        </div>
        <div>
          {this.state.items.map((item) => (
            <div>{item.item_name}</div>
          ))}
        </div>
      </section>
    );
  }
}

export default Menu;
