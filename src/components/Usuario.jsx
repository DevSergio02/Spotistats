import React from "react";

export const Usuario = (props) => {
  return (
    <div className="usuario">
      <img src={props.imagen} />
      <div className="info">
        <div className="titulo">
          <h2>{props.nombre}</h2>
        </div>
        <div className="texto">
          <h3>{props.email}</h3>
          <h3>
            {props.seguidores}{" "}
            {props.seguidores === 1 ? "seguidor" : "seguidores"}
          </h3>
        </div>
        <div className="texto"></div>
      </div>
    </div>
  );
};

export default Usuario;
