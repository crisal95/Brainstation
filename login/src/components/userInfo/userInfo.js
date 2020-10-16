import React, { Component } from "react";
import './userInfo.css';
import CR from "../../data/credentials.json";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { userInfo: this.props.data };
  }
  base_url = "https://bootcamp-users.herokuapp.com/?";

  componentDidMount() {
    if (!this.props.data) {
        var index = localStorage.getItem("index");
        console.log(index);
      var user = CR[index];
      fetch(
        this.base_url + "email=" + user.email + "&password=" + user.password
      )
        .then((res) => res.json())
        .then(
          (result) => {
              this.setState({userInfo: result.user})
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error,
            });
          }
        );
    }
  }

  render() {
    var info = this.state.userInfo;
    return info ? (
      <div className="info">
        <div>
          <h2>{info.name} info</h2>
        </div>
        <p>
          <span>Alcohol: </span>
          {info.alcohol ? "Yes, a lot" : "No, like a priest on sunday."}
        </p>
        <p>
          <span>Country: </span> {info.country}
        </p>
        <p>
          <span>Email: </span> {info.email}
        </p>
        <p>
          <span>Favorite </span> color: {info.favorite.color}, food:{" "}
          {info.favorite.food}, music: {info.favorite.music}
        </p>
        <p>
          <span>Has couple: </span> {info.hasCouple}
        </p>
        <p>
          <span>Name: </span> {info.name}
        </p>
        <p>
          <span>Salary: </span> {info.salary}
          {info.salaryCurrency}
        </p>
        <p>
          <span>Age: </span> {info.years}
        </p>
      </div>
    ) : (
      <></>
    );
  }
}

export default UserInfo;
