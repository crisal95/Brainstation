import React, { Component } from "react";
import HeroesList from "../heroesList/heroesList";
import "./filterHeroes.css";


class FilterHeroes extends Component {
  constructor(props) {
    super(props);

    this.filter = this.filter.bind(this);
    this.state = {
      childData: this.props.data,
      itemsAmount: this.props.data.length,
    };
  }



  filter(event) {
    this.setState(
      {
        childData: this.props.data.filter((item) =>
          item.name.toLowerCase().includes(event.target.value.toLowerCase())
        ),
      },
      function () {
        this.setState({
          itemsAmount: this.state.childData.length,
        });
      }
    );
  }

  render() {
    var { childData } = this.state;
    var amount = this.state.itemsAmount;
    return (
      <div className="filter">

          <input
            className="input-filter"
            input
            type="text"
            onChange={this.filter}
            placeholder="Search by name"
          />


        <div>
          <HeroesList data={childData} amount={amount} />
        </div>
      </div>
    );
  }
}

export default FilterHeroes;
