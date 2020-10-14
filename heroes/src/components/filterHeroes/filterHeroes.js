import React, { Component } from "react";
import HeroesList from "../heroesList/heroesList";
import "./filterHeroes.css";

class FilterHeroes extends Component {
  constructor(props) {
    super(props);

    this.filter = this.filter.bind(this);
    this.state = {
      childData: this.props.data,
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
    return (
      <div className="filter">
        <input type="text" onChange={this.filter} placeholder="Search a Hero"/>
        <HeroesList data={childData}/>
      </div>
    );
  }
}

export default FilterHeroes;