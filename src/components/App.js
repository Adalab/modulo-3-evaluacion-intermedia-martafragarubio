import React from "react";
import "../stylesheets/App.css";
import data from "../data/data.json";
import PokeList from "./PokeList";

//console.log(data);
const App = () => {
  return (
    <>
      <h1 className="pokListTitle">Mi lista de Pokemon</h1>
      <PokeList data={data} />
    </>
  );
};

export default App;
