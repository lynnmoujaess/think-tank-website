import React, { useState } from "react";
import "./ValueCardStyles.css";

const ValueCard = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`value-card ${isFlipped ? "flipped" : ""}`} onMouseEnter={flipCard} onMouseLeave={flipCard}>
      <div className="value-card-front">
        <img className="value-card-image" src={props.img} alt=""/>
        <h4 className="value-card-title">{props.value}</h4>
      </div>
      <div className="value-card-back">
        <p className="value-card-body">{props.description}</p>
      </div>
    </div>
  );
};

export default ValueCard;