import React from "react";
import logo from "../../assets/logo.svg";

const HeaderPrincipal = ({ redireccionPerfil, cerrarSesion, navigate }) => {
  return (
    <div className="header-container">
      <div className="title-container">
        <img src={logo} alt="Logo de Spotify" />
        <h1>Spotistats</h1>
      </div>
      <div className="buttons-container">
        <button
          onClick={(event) => redireccionPerfil(event, navigate)}
          className="button"
        >
          Mi perfil
        </button>
        <button onClick={(event) => cerrarSesion(event, navigate)}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default HeaderPrincipal;
