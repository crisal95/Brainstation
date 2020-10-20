import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="link"><Link to="/">Home</Link></div>
        <div className="title"><h1>CrisTube</h1></div>
        
      </header>
    );
  }
}

export default Header;
