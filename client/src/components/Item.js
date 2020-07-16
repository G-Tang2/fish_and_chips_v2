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

  categoryItems() {
    const dots = (numberOfDots) => {
      let retVal = "";
      for (let i = 0; i < numberOfDots; i++) {
        retVal += ".";
      }
      return retVal;
    };

    // returns the item description if it has any
    let itemDescription = (item) => {
      return item.item_desc !== null ? item.item_desc : null;
    };

    // returns a plus symbol (+) if the category is an "extra cost" category
    let priceSymbol = () => {
      return this.props.category.parent_category_id !== null ? "+" : "";
    };

    // items of the given category
    const filteredItems = this.state.items.filter((item) => item.category_id === this.props.category.category_id);

    return filteredItems.map((categoryItem) => (
      <div key={categoryItem.item_id} className="item-container">
        <div className="item-pricing">
          <span className="flex-side">{categoryItem.item_name}</span>
          <span className="flex-center">{dots(200)}</span>
          <span className="flex-side">{priceSymbol() + "$" + categoryItem.item_price.toFixed(2)}</span>
        </div>
        <div className="item-description">{itemDescription(categoryItem)}</div>
      </div>
    ));
  }

  componentDidMount() {
    this.getItems();
  }

  render() {
    return this.categoryItems();
  }
}

export default Item;
