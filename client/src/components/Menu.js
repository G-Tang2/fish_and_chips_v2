import React, { Component } from "react";
import CategoryBar from "./CategoryBar";
import MenuBody from "./MenuBody";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.catBarRef = React.createRef();
    this.menuComponentRef = React.createRef();
    this.menuRef = React.createRef();
    this.resizeCategoryBarOnScroll = this.resizeCategoryBarOnScroll.bind(this);
    this.disableTransitionOnResize = this.disableTransitionOnResize.bind(this);
    this.state = {
      categories: [],
      expandCategoryBar: false,
      resizing: false,
    };
  }

  getCategories() {
    fetch("/api/category")
      .then((res) => res.json())
      .then((res) => this.setState({ categories: res }));
  }

  setYPos() {
    this.setState({ initCategoryBarYPos: this.catBarRef.current.offsetTop });
  }

  resizeCategoryBarOnScroll() {
    const headerHeight = Math.round(this.props.headerRef.current.headerRef.current.getBoundingClientRect().height);
    const currentYPos = Math.round(this.catBarRef.current.getBoundingClientRect().y);

    if (currentYPos === headerHeight && this.state.expandCategoryBar === false) {
      this.setState({ expandCategoryBar: true });
    } else if (currentYPos !== headerHeight && this.state.expandCategoryBar === true) {
      this.setState({ expandCategoryBar: false });
    }
  }

  disableTransitionOnResize() {
    let timer = 0;

    if (timer) {
      clearTimeout(timer);
      timer = null;
    } else this.setState({ resizing: true });

    timer = setTimeout(() => {
      this.setState({ resizing: false });
      timer = null;
    }, 100);
  }

  categoryBarClassName() {
    let retVal = this.state.expandCategoryBar ? "category-bar-expanded" : "category-bar";
    retVal += this.state.resizing ? " no-transition" : "";
    return retVal;
  }

  componentDidMount() {
    this.getCategories();
    this.setYPos();
    window.addEventListener("scroll", this.resizeCategoryBarOnScroll);
    window.addEventListener("resize", this.disableTransitionOnResize);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.resizeCategoryBarOnScroll);
    window.removeEventListener("resize", this.disableTransitionOnResize);
  }

  render() {
    return (
      <React.Fragment>
        <div className="main-wrapper menu-wrapper">
          <div className="menu-container">
            <h1 className="heading">{this.props.heading.toUpperCase()}</h1>
          </div>
        </div>
        <div className={this.categoryBarClassName()} ref={this.catBarRef}>
          <div className="inner-category-bar">
            <CategoryBar
              categories={this.state.categories}
              headerRef={this.props.headerRef}
              menuRef={this.menuRef}
              menuComponentRef={this.menuComponentRef}
              catBarRef={this.catBarRef}
            />
          </div>
        </div>
        <section className="main-wrapper menu-wrapper" ref={this.menuRef}>
          <div className="menu-container">
            <div className="menu-body">
              <MenuBody categories={this.state.categories} ref={this.menuComponentRef} menuRef={this.menuRef} />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Menu;
