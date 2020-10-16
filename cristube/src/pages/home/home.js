import React, { useState, useEffect } from "react";
import "./home.css";
import GetList from "../../hooks/getList";
import VideoCard from "../../components/videoCard/videoCard";

const Home = () => {
  const [list, setList] = useState(null);
  const [inputText, setText] = useState("");
  const [filteredList, setFilteredList] = useState(null);
  const getList = GetList();
  const BASE_URL = "https://bootcamp-users.herokuapp.com/videos";

  useEffect(() => {
    if (filteredList) {
      setList(filteredList);
    } else {
      if (getList) {
        setList(getList);
      }
    }
  });

  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  const search = () => {
    fetch(BASE_URL + "?search=" + inputText)
      .then((resp) => resp.json())
      .then((res) => {
        setFilteredList(res.videos);
      })
      .catch((ex) => {
        console.error(ex);
      });
  };

  return (
    list && (
      <div className="home">
        <div className="input-container">
          <input
            type="text"
            className="input"
            name="input"
            onChange={handleInputChange.bind(this)}
            placeholder="Search..."
          />

            <button className="search"
              onClick={() => {
                search();
              }}
            >
              Search
            </button>
          
        </div>

        {list.map((item) => (
          <div key={item.id} className="item">
            <VideoCard video={item} />
          </div>
        ))}
      </div>
    )
  );
};

export default Home;
