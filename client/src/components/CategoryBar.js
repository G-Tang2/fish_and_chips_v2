import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";

class CategoryBar extends Component {
  constructor(props) {
    super(props);
    this.state = { activeCategoryId: null };
    this.onScroll = this.onScroll.bind(this);
  }

  scrollTo = (ref) => {
    const heightOfBar = this.props.headerRef.current.headerRef.current.offsetHeight + this.props.catBarRef.current.offsetHeight;
    window.scrollTo(0, ref.offsetTop - heightOfBar);
  };

  mainCategory(category) {
    return category.parent_category_id === null ? (
      <Button
        key={category.category_id}
        className={this.state.activeCategoryId === category.category_id ? "category-link active" : "category-link"}
        onClick={() => this.scrollTo(this.props.menuComponentRef.current.categoryRefs[category.category_id])}
      >
        {category.category_name}
      </Button>
    ) : null;
  }

  getCategoryIndices(categoryArr) {
    let ar = [];
    for (let i = 1; i < categoryArr.length; i++) {
      if (categoryArr[i] != null) {
        ar.push(i);
      }
    }
    return ar;
  }

  isViewingMenu() {
    const headerHeight = this.props.headerRef.current.headerRef.current.offsetHeight;
    const catBarHeight = this.props.catBarRef.current.offsetHeight;
    const topYPos = this.props.menuRef.current.offsetTop;

    const startYPos = topYPos - (headerHeight + catBarHeight);
    const endYPos = topYPos + this.props.menuRef.current.offsetHeight - headerHeight;

    const currentYPos = Math.round(window.pageYOffset);
    return currentYPos >= startYPos && currentYPos <= endYPos;
  }

  onScroll() {
    if (this.isViewingMenu()) {
      const categoryRefs = this.props.menuComponentRef.current.categoryRefs;
      const categoryIndices = this.getCategoryIndices(categoryRefs);
      const heightOfTopBar = this.props.headerRef.current.headerRef.current.offsetHeight + this.props.catBarRef.current.offsetHeight;

      for (let i = categoryIndices.length - 1; i >= 0; i--) {
        const categoryIndex = categoryIndices[i];
        if (categoryRefs[categoryIndex].offsetTop - heightOfTopBar <= Math.round(window.pageYOffset)) {
          this.setState({ activeCategoryId: categoryIndex });
          break;
        }
      }
    } else if (this.state.activeCategoryId !== null) {
      this.setState({ activeCategoryId: null });
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  render() {
    return <React.Fragment>{this.props.categories.map((category) => this.mainCategory(category))}</React.Fragment>;
  }
}

export default CategoryBar;
