import React, { useState } from "react";
import "./videoCard.css";
import { Redirect } from "react-router-dom";

const VideoCard = ({ video }) => {
  const [redirect, setRedirect] = useState(false);

  const click = () => {
    setRedirect(true);
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
      console.log(redirect);
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
