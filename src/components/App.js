import React from "react";
import "../stylesheets/App.css";
import data from "../data/data.json";
import PokeList from "./PokeList";

//console.log(data);
const App = () => {
  return (
    <div className="pokContainer">
      <h1 className="pokListTitle">mi lista de Pokemon</h1>
      <PokeList data={data} />
    </div>
  );
};

export default App;
