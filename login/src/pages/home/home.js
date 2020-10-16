import React, { Component } from 'react';
import './home.css';
import UserInfo from "../../components/userInfo/userInfo";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div><UserInfo data={this.props.data} /></div>  );
    }
}
 
export default Home;