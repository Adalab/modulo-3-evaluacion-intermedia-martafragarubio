import React from "react";

const Pokemon = (props) => {
  //console.log(props.pokeData);

  const renderTypes = () => {
    return props.pokeData.types.map((type) => {
      return <li className="pokType">{type}</li>;
    });
  };

  return (
    <article>
      <img
        src={props.pokeData.url}
        className="pokImage"
        alt={props.pokeData.name}
      />
      <h2 className="pokName"> {props.pokeData.name}</h2>
      <ul className="pokTypes">{renderTypes()}</ul>
    </article>
  );
};

export default Pokemon;
