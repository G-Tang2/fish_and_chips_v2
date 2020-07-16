import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
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
      //main category
      return (
        <React.Fragment>
          <h1>{category.category_name.toUpperCase()}</h1>
          {this.categoryDescription(category)}
        </React.Fragment>
      );
    } else {
      //sub-category
      return <h3>EXTRA</h3>;
    }
  }

  categoryDescription(category) {
    return category.category_desc !== null ? <span className="category-description">{category.category_desc}</span> : null;
  }

  addDivider(category) {
    if (category.category_id !== 1 && category.parent_category_id === null) {
      return <Divider className="horizontal-divider" />;
    }
  }

  category() {
    return this.state.categories.map((category) => (
      <React.Fragment key={category.category_id}>
        {this.addDivider(category)}
        <div className="category-container">
          <div className="category-title">{this.categoryTitle(category)}</div>
          <div className="grid-x2">
            <Item category={category} />
          </div>
        </div>
      </React.Fragment>
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
