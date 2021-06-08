import React from "react";
import Pokemon from "./Pokemon";
//me faltan las PropTypes

const PokeList = (props) => {
  //console.log(props.data);
  const htmlData = props.data.map((pokeData) => (
    //console.log(clubData);
    <li key={pokeData.id} className="pokListOne">
      <Pokemon pokeData={pokeData} />
    </li>
  ));
  return <ul>{htmlData}</ul>;
};

export default PokeList;
