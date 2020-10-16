import React, { useState, useEffect } from "react";

const GetVideo = () => {
  const [video, setVideo] = useState(null);
  const BASE_URL = "https://bootcamp-users.herokuapp.com/video";
  let id = window.location.href.split("id=").reverse()[0];
  useEffect(() => {
    fetch(BASE_URL + "?id=" + id )
      .then((resp) => resp.json())
      .then((res) => {
        setVideo(res.video);
      })
      .catch((ex) => {
        console.error(ex);
      });
  }, []);
  return video;
};

export default GetVideo;
