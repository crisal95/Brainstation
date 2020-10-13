import React, { Component } from "react";
import "./showData.css";

class ShowData extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var { data } = this.props;

    return (
      <div className="show-info-container">
        <h2>{data.name}</h2>
        <p>{data.summary} </p>
        <p>
          <span className="info-title">Show status:</span> {data.status}
        </p>
        <p>
          <span className="info-title">Web site:</span>{" "}
          <a href={data.url}>{data.url}</a>
        </p>
        <img src={data.image} alt="Show cover" />
      </div>
    );
  }
}

export default ShowData;
