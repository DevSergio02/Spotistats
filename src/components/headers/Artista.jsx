import React from "react";
import logo from "../../assets/logo.svg";

const HeaderArtista = ({ redireccionInicio, navigate, abrirenspotify }) => {
  return (
    <div className="header-container">
      <div className="title-container">
        <img src={logo} alt="Logo de Spotify" />
        <h1>Spotistats</h1>
      </div>
      <div className="buttons-container">
        <a href={abrirenspotify}>
          <button type="button">Abrir artista</button>
        </a>
        <button
          onClick={(event) => redireccionInicio(event, navigate)}
          className="button"
        >
          Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default HeaderArtista;
