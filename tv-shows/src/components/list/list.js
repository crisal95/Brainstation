import React, { Component } from "react";
import "./list.css";
import ShowData from "../showData/showData.js";
import EpisodeInfo from "../episodeInfo/episodeInfo";

class List extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    var { data, showInfo } = this.props;
    return data ? (
      <div className="show-container">
        <div className="list">
          <div>
            <h2>Episodes list</h2>
            <ul className="episodes-list">
              {data.map((item) => (
               <li key={item.id}>{item.name}<EpisodeInfo season={item.season} airdate={item.airdate} summary={item.summary} /></li> 
              ))}
            </ul>
          </div>
          <div id="episodeInfo" className="episodeInfo">
          </div>
        </div>
        <div className="info">
          <ShowData data={showInfo} />
        </div>
      </div>
    ) : (
      <></>
    );
  }
}

export default List;
