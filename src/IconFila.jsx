import React from "react";
import "./Icono.css";

function Icon(props) {
    return (
      <div className="icon" onClick={props.onClick}>
        <img src={props.imageUrl} alt="Icono" className="icon-image" />
      </div>
    );
  }

export default Icon;


