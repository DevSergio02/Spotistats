import React from "react";

export const Artista = (props) => {
  function formatearSeguidores(numero) {
    return numero.toLocaleString("es-ES");
  }

  return (
    <div className="artista-info">
      <img src={props.imagen} alt={props.nombre} />
      <div className="info">
        <div className="titulo">
          <h2>{props.nombre}</h2>
        </div>
        <div className="texto">
          <h3>{formatearSeguidores(props.seguidores)} seguidores</h3>
          <h3>Popularidad: {props.popularidad}</h3>
          <h3>Géneros: {props.generos}</h3>
        </div>
      </div>
    </div>
  );
};

export default Artista;
