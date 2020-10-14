import React from "react";
import List from "../components/list/list";
import Filter from "../components/filter/filter";
import "./home.css";

import BCS from "../data/betterCallSaul.json";
import BM from "../data/blackMirror.json";
import MR from "../data/mrRobot.json";

const getEpisodes = (list) => list["_embedded"].episodes;
const getShowInfo = (list) => {
  const showInfo = {
    name: list.name,
    status: list.status,
    summary: list.summary,
    url: list.url,
    image: list.image.original,
  };
  return showInfo;
};

function Home() {
  return (
    <div className="home">
      <div className="content">
        <Filter data={getEpisodes(BCS)} showInfo={getShowInfo(BCS)} />
        <Filter data={getEpisodes(BM)} showInfo={getShowInfo(BM)} />
        <Filter data={getEpisodes(MR)} showInfo={getShowInfo(MR)} />
        <List data={getEpisodes(MR)} showInfo={getShowInfo(BCS)} />
      </div>
    </div>
  );
}

export default Home;
