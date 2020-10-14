import React from 'react';
import './App.css';
import heroes from "../data/heroes.json";
import HeroesFilter from "../components/filterHeroes/filterHeroes";

const getHeroes = (list) => list;


function App() {
  return (
    <div className="home">
      <HeroesFilter data={getHeroes(heroes)} />
      
    </div>
  );
}



export default App;
