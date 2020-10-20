import React, { Component } from "react";
import "./imgCard.css";
import InfoModal from "../info-modal/info-modal";
import { useDispatch } from "react-redux";
import allActions from "../../actions";

const ImgCard = ({ data, heroInfo, elemIndex }) => {
  var { imgSource, title } = data;
  var heroInfo = heroInfo;
  var index = elemIndex;
  const dispatch = useDispatch();


  return imgSource ? (
    <div className="imgCard-container">
      <div className="img">
        <img src={imgSource} alt="Hero profile"></img>
      </div>
      <div className="title">
        <h3>{title}</h3>
        <InfoModal {...heroInfo} />
        <button onClick={() => dispatch(allActions.listActions.deleteItem(index))}>
          Delete
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ImgCard;
