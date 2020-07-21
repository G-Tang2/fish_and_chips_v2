import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class CategoryBar extends Component {
  mainCategory(category) {
    return category.parent_category_id === null ? (
      <Button key={category.category_id} className="category-link">
        {category.category_name}
      </Button>
    ) : null;
  }

  render() {
    return <React.Fragment>{this.props.categories.map((category) => this.mainCategory(category))}</React.Fragment>;
  }
}

export default CategoryBar;
