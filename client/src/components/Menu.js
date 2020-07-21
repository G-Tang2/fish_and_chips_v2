import React, { Component } from "react";
import CategoryBar from "./CategoryBar";
import MenuBody from "./MenuBody";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.resizeCategoryBarOnScroll = this.resizeCategoryBarOnScroll.bind(this);
    this.state = {
      categories: [],
      expandCategoryBar: false,
      initCategoryBarYPos: null,
    };
  }

  getCategories() {
    fetch("/api/category")
      .then((res) => res.json())
      .then((res) => this.setState({ categories: res }));
  }

  setYPos() {
    this.setState({ initCategoryBarYPos: this.myRef.current.offsetTop });
  }

  resizeCategoryBarOnScroll() {
    const headerHeight = this.props.getHeader().current.headerRef.current.offsetHeight;
    const currentYPos = this.myRef.current.getBoundingClientRect().y;
    if (currentYPos === headerHeight && this.state.expandCategoryBar === false) {
      this.setState({ expandCategoryBar: true });
    } else if (currentYPos !== headerHeight && this.state.expandCategoryBar === true) {
      this.setState({ expandCategoryBar: false });
    }
  }

  componentDidMount() {
    this.getCategories();
    this.setYPos();
    window.addEventListener("scroll", this.resizeCategoryBarOnScroll);
  }

  render() {
    return (
      <React.Fragment>
        <div className="main-wrapper menu-wrapper">
          <div className="menu-container">
            <h1 className="heading">{this.props.heading.toUpperCase()}</h1>
          </div>
        </div>
        <div className={this.state.expandCategoryBar ? "category-bar-expanded" : "category-bar"} ref={this.myRef}>
          <CategoryBar categories={this.state.categories} />
        </div>
        <section className="main-wrapper menu-wrapper">
          <div className="menu-container">
            <div className="menu-body">
              <MenuBody categories={this.state.categories} />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Menu;
