import React, { Component } from "react";
import "./img.css";

class ImgCard extends Component {
    
  render() {
    var imgSource  = this.props.data;
    return imgSource ? <img src={imgSource} alt="Hero profile"></img> : <></>;
  }
}

export default ImgCard;
