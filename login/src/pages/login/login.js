import React, { Component } from "react";
import "./login.css";
import CR from "../../data/credentials.json";
import USERS from "../../data/users.json";
import Cookies from "js-cookie";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  base_url = "https://bootcamp-users.herokuapp.com/?";
  render() {
    return (
      <div className="login">
        <div className="email-container">
          <label for="email">Email:</label>
          <input
            id="email"
            type="email"
            className="input-email"
            name="email"
            onChange={this.handleEmailChange.bind(this)}
          />
        </div>
        <div className="password-container">
          <label for="password">Password:</label>
          <input
            id="password"
            type="password"
            className="input-password"
            name="password"
            onChange={this.handlePasswordChange.bind(this)}
          />
        </div>
        <div className="login-button">
          <button
            onClick={() => {
              this.login();
            }}
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  login() {
    const userInfo = {
      email: this.state.email,
      password: this.state.password,
    };

    if (
      CR.find((element) => element.email === userInfo.email) &&
      CR.find((element) => element.password === userInfo.password)
    ) {
      this.saveIndex(CR.indexOf(CR.find((element) => element.email === userInfo.email)));
      this.createCookie(userInfo);
    }
  }
  handleLoginChange = (bool, user) => {
    this.props.onLogin(bool, user);
  };


  saveIndex(index) {
      console.log(index);
    localStorage.setItem("index", JSON.stringify(index));
  }

  createCookie(user) {
    fetch(this.base_url + "email=" + user.email + "&password=" + user.password)
      .then((res) => res.json())
      .then(
        (result) => {
          var userCookie = JSON.stringify(result.user.token);
          Cookies.set("user", userCookie);
          this.handleLoginChange(true, result.user);
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

export default Login;
