import React from "react";

export const Cancion = (props) => {
  return (
    <div className="cancion-info">
      <img src={props.imagen} alt={props.nombre} />
      <div className="info">
        <div className="titulo">
          <h2>{props.nombre}</h2>
        </div>
        <div className="texto">
          <h3>Artistas: {props.artistas}</h3>
          <h3>Duración: {props.duracion}</h3>
        </div>
      </div>
    </div>
  );
};

export default Cancion;
