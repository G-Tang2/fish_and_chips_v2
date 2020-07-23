import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class CategoryBar extends Component {
  constructor(props) {
    super(props);
  }

  scrollTo = (ref) => {
    const heightOfBar = this.props.headerRef.current.headerRef.current.offsetHeight + this.props.catBarRef.current.offsetHeight;
    window.scrollTo(0, ref.offsetTop - heightOfBar);
  };

  mainCategory(category) {
    return category.parent_category_id === null ? (
      <Button key={category.category_id} className="category-link" onClick={() => this.scrollTo(this.props.menuRef.current.categoryRefs[category.category_id])}>
        {category.category_name}
      </Button>
    ) : null;
  }

  render() {
    return <React.Fragment>{this.props.categories.map((category) => this.mainCategory(category))}</React.Fragment>;
  }
}

export default CategoryBar;
