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
    let items = [];
    this.state.categories.map((category) =>
      fetch(`/api/${category.category_id}/item`)
        .then((res) => res.json())
        .then((res) => (items[category.category_id] = res))
    );
    this.setState({ items });
  }

  componentDidMount() {
    this.getCategories();
    this.getItems();
  }

  render() {
    return (
      <section className="main-wrapper">
        <div>
          {this.state.categories.map((category) => (
            <div>
              <div>{category.category_name}</div>
              {/* {console.log(category.category_id)}
              {console.log(this.state.items)}
              {console.log(this.state.items[category.category_id])}
              {this.state.items[category.category_id].map((item) => (
                <div>{item.item_name}</div>
              ))} */}
            </div>
          ))}
        </div>
        <div>
          {this.state.items.map((item) => (
            <div>
              <div>{item.item_name}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Menu;
