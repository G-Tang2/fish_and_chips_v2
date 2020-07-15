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
    fetch(`/api/item`)
      .then((res) => res.json())
      .then((res) => this.setState({ items: res }));
  }

  componentDidMount() {
    this.getCategories();
    this.getItems();
  }

  categoryBlock() {
    return this.state.categories.map((category) => (
      <div>
        <div>{category.category_name}</div>
        <div>
          {this.state.items
            .filter((item) => item.category_id === category.category_id)
            .map((filteredItem) => (
              <div>{filteredItem.item_name}</div>
            ))}
        </div>
      </div>
    ));
  }

  render() {
    let categ = this.categoryBlock();
    return <section className="main-wrapper">{categ}</section>;
  }
}

export default Menu;
