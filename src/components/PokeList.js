import React from "react";
import Pokemon from "./Pokemon";

const PokeList = (props) => {
  //console.log(props.data);
  const htmlData = props.data.map((pokeData) => (
    //console.log(pokeData);
    <li key={pokeData.id} className="pokListOne">
      <Pokemon pokeData={pokeData} />
    </li>
  ));
  return <ul className="pokListAll">{htmlData}</ul>;
};

export default PokeList;
