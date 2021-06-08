import React from "react";

//me faltan las PropTypes
// <div className="icono">{props.clubData.fa}</div>
// <div className="clubName">{props.clubData.name}</div>

const Pokemon = (props) => {
  //console.log(props.clubData);

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

/*PropTypes(previamente hay que instalarse: --save props-types)
ClubCard.PropTypes = {
  clubData: PropTypes.shape ({
    name: PropTypes.string,
    fa: PropTypes.string,
    members: PropTypes.array
}*/

export default Pokemon;
