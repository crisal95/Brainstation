import React, { useState, useEffect } from "react";

const FilteredList = ({input}) => {
  const [list, setList] = useState(null);
  const BASE_URL = "https://bootcamp-users.herokuapp.com/videos";
  console.log(input);

  useEffect(() => {
    fetch(BASE_URL + "?search=" + input)
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

export default FilteredList;