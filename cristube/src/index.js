import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from "../src/pages/home/home";
import Video from "../src/pages/video/video";
import Header from "../src/components/header/header";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Header/>
    <React.StrictMode>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/video">
          <Video />
        </Route>
      </Switch>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
