import React, { Component } from "react";
import List from "../list/list";
import "./filter.css";

class Filter extends Component {
  constructor(props) {
    super(props);

    this.filter = this.filter.bind(this);
    this.state = {
      childData: this.props.data,
      showInfo: this.props.showInfo,
    };
  }

  filter(event) {
    this.setState({
      childData: this.props.data.filter((item) =>
        item.name.toLowerCase().includes(event.target.value.toLowerCase())
      ),
    });
  }

  render() {
    var { childData } = this.state;
    var showInfo = this.state.showInfo;
    return (
      <div className="filter">
        <input type="text" onKeyDown={this.filter} placeholder="Search an episode"/>
        <List data={childData} showInfo={showInfo} />
      </div>
    );
  }
}

export default Filter;
