import React, { Component } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";

class Images extends Component {
  render() {
    return (
      <div className="image-container">
        <img className="food-image" src={img1} />
        <img className="food-image" src={img2} />
        <img className="food-image" src={img3} />
      </div>
      //   <GridList cols={3}>
      //     <GridListTile cols={1}>
      //       <img src={img1} />
      //     </GridListTile>
      //     <GridListTile cols={1}>
      //       <img src={img2} />
      //     </GridListTile>
      //     <GridListTile cols={1}>
      //       <img src={img3} />
      //     </GridListTile>
      //   </GridList>
    );
  }
}

export default Images;
