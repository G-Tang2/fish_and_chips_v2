import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  getItems() {
    fetch(`/api/item`)
      .then((res) => res.json())
      .then((res) => this.setState({ items: res }));
  }

  categoryItems(category) {
    let dots = (numberOfDots) => {
      let retVal = "";
      for (let i = 0; i < numberOfDots; i++) {
        retVal += ".";
      }
      return retVal;
    };
    return this.state.items
      .filter((item) => item.category_id === category.category_id)
      .map((categoryItem) => (
        <div item xs={6} className="item-container">
          <span className="flex-side">{categoryItem.item_name}</span>
          <span className="flex-center">{dots(200)}</span>
          <span className="flex-side">{"$" + categoryItem.item_price.toFixed(2)}</span>
        </div>
      ));
  }

  componentDidMount() {
    this.getItems();
  }

  render() {
    return this.categoryItems(this.props.category);
  }
}

export default Item;
