import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./pages/app/App";
import * as serviceWorker from './serviceWorker';
import Header from "../src/components/header/header";
import Footer from "../src/components/footer/footer";

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <App />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
