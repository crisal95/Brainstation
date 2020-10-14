import React, { Component } from "react";
import "./episodeInfo.css";

class EpisodeInfo extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    var  data  = this.props.data;

    return (
      <div className="episode-info-container">
          <h3>Episode info</h3>
        <p>Season: {data.season}</p>
        <p>Airdate: {data.airdate}</p>
        <p>Summary: {data.summary}</p>
      </div>
    );
  }
}

export default EpisodeInfo;
