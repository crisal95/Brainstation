import React, { useState, useEffect } from "react";

const GetList = () => {
  const [list, setList] = useState(null);

  useEffect(() => {
    fetch(`https://bootcamp-users.herokuapp.com/videos`)
      .then((resp) => resp.json())
      .then((res) => {
        setList(res.videos);
      })
      .catch((ex) => {
        console.error(ex);
      });
  }, []);
  return list;
};

export default GetList;
