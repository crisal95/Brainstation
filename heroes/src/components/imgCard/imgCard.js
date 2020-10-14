import React, { Component } from "react";
import "./imgCard.css";
import InfoModal from "../info-modal/info-modal";

class ImgCard extends Component {

  render() {
    var { imgSource, title } = this.props.data;
    var heroInfo = this.props.heroInfo;
    return imgSource ? (
      <div className="imgCard-container">
        <div className="img">
          <img src={imgSource} alt="Hero profile"></img>
        </div>
        <div className="title">
          <h3>{title}</h3>
          <InfoModal{...heroInfo} />
        </div>
      </div>
    ) : (
      <></>
    );
  }
}

export default ImgCard;
