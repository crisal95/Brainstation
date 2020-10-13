import React, { Component } from "react";
import "./img.css";

class Img extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    var { src } = this.props;
    return src ? (
     
        <img src={src} alt="Show cover" />
    ) : (
      <></>
    );
  }
}

export default Img;
