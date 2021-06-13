import React from "react";
import "../stylesheets/App.css";
import data from "../data/data.json";
import PokeList from "./PokeList";
import { useState } from "react";

//console.log(data);
const App = () => {
  const [pokemons] = useState(data);

  return (
    <div className="pokContainer">
      <h1 className="pokListTitle">mi lista de Pokemon</h1>
      <PokeList data={pokemons} />
    </div>
  );
};

export default App;
