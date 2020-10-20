import React from "react";
import "./video.css";
import GetVideo from "../../hooks/getVideo";



const Video = () => {
  const video = GetVideo();


  return (
    video && (
      <div className="videoContainer">
        <div className="videoPlayer">
          <iframe
            width="700"
            height="500"
            src={video.url}
            title={video.title}
          ></iframe>
        </div>
        <div className="videoPlayerInfo">
          <div className="video-text">
            <h2>{video.title}</h2>
            <p>{video.description}</p>
            <p>
              <span>Likes: </span>
              {video.likes}
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default Video;
