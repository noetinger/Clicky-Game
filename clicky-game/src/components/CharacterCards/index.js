import React from "react";
import "./style.css";

const CharacterCards = props => (
  <div key={props.id} role="img" className="click-item" onClick={() => props.handleDivClick(props.id)} >
        
      <img alt={props.name} src={props.img} />
  </div>
);

export default CharacterCards;