import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import Item from "./Item";

class MenuBody extends Component {
  constructor(props) {
    super(props);
    this.categoryRefs = [];
  }

  categoryHeading(category) {
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
    if (category.category_id === 1) {
      this.categoryRefs[1] = this.props.menuRef.current; // first category scrolls to the top of menu container
    } else if (category.category_id > 1 && category.parent_category_id === null) {
      return <Divider className="horizontal-divider" ref={(categoryRefs) => (this.categoryRefs[category.category_id] = categoryRefs)} />;
    }
  }

  categoryBlock(category) {
    return (
      <div className="category-container">
        <div className="category-heading">{this.categoryHeading(category)}</div>
        <div className="grid-x2">
          <Item category={category} />
        </div>
      </div>
    );
  }

  render() {
    return this.props.categories.map((category) => (
      <React.Fragment key={category.category_id}>
        {this.addDivider(category)}
        {this.categoryBlock(category)}
      </React.Fragment>
    ));
  }
}

export default MenuBody;
