import React, { Component } from "react";
import Item from "./Item";

class MenuBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  getCategories() {
    fetch("/api/category")
      .then((res) => res.json())
      .then((res) => this.setState({ categories: res }));
  }

  categoryTitle(category) {
    if (category.parent_category_id === null) {
      return <h1>{category.category_name.toUpperCase()}</h1>;
    } else {
      return <h3>{category.category_name.toUpperCase()}</h3>;
    }
  }

  category() {
    return this.state.categories.map((category) => (
      <div>
        <div className="category-container">
          <div className="category-title">{this.categoryTitle(category)}</div>
          <div className="grid-x2">
            <Item category={category} />
          </div>
        </div>
      </div>
    ));
  }

  componentDidMount() {
    this.getCategories();
  }

  render() {
    return this.category();
  }
}

export default MenuBody;
