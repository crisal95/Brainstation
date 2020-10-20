import React, { useState, useEffect } from "react";
import "./videoCard.css";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';


const VideoCard = ({ video }) => {
  const [redirect, setRedirect] = useState(false);
  const bool = useSelector(state => state.Video);
  const dispatch = useDispatch();


  const click = () => {
    dispatch(allActions.VideoActions.changeBool());
    console.log(bool);
    setRedirect(bool);
  };


  const redirectTo = (id) => {
    return (
      <Redirect
        to={{
          pathname: "/video",
          search: "?id=" + id,
        }}
      />
    );
  };

  if (redirect) {
    return redirectTo(video.id);
  }
  return (
    <div className="videoCard">
      <div className="img">
        <img src={video.poster}  onClick={() => {
              click();
            }} alt="Video poster"/>
      </div>
      <div className="text">
        <h2>{video.title}</h2>
        <p>{video.description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
