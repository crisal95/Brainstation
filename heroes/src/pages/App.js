import React from 'react';
import './App.css';
import heroes from "../data/heroes.json";
import HeroesFilter from "../components/filterHeroes/filterHeroes";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const getHeroes = (list) => list;


function App() {
  return (
    <div className="home">
      <Header/>
      <HeroesFilter data={getHeroes(heroes)} />
      <Footer/>
    </div>
  );
}



export default App;
