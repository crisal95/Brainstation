import React from "react";
import List from "../components/list/list";
import Filter from "../components/filter/filter";
import "./home.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

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
      <Header/>
      <div className="content">
        <Filter data={getEpisodes(BCS)} showInfo={getShowInfo(BCS)} />
        <Filter data={getEpisodes(BM)} showInfo={getShowInfo(BM)} />
        <Filter data={getEpisodes(MR)} showInfo={getShowInfo(MR)} />
        <List data={getEpisodes(MR)} showInfo={getShowInfo(BCS)} />
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
