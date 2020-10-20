import React from "react";
import "./App.css";
import heroes from "../data/heroes.json";
import HeroesFilter from "../components/filterHeroes/filterHeroes";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

import { useSelector, useDispatch } from "react-redux";
import allActions from "../actions";

function App() {
  const list = useSelector((state) => state.list);
  const dispatch = useDispatch();
  dispatch(allActions.listActions.list());
  const amount = useSelector((state) => state.amount);
  dispatch(allActions.amountActions.amount());

  return (
    <div className="home">
      <Header />
      <HeroesFilter data={list} amount={amount} />
      <Footer />
    </div>
  );
}

export default App;
