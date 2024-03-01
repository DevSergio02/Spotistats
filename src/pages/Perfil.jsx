import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  obtenerTokenAlmacenado,
  obtenerUsuarioJSON,
  obtenerArtistasSeguidosJSON,
} from "../api/API";
import HeaderSecundario from "../components/headers/Secundario.jsx";
import Usuario from "../components/Usuario";
import Artista from "../components/Artista";
import "../styles/Perfil.css";

export function Perfil() {
  const navigate = useNavigate();
  const [infoUsuario, establecerInfoUsuario] = useState(null);
  const [artistasSeguidos, establecerArtistasSeguidos] = useState(null);
  const [numeroArtistas, establecerNumeroArtistas] = useState("5");

  const token = obtenerTokenAlmacenado();

  useEffect(() => {
    async function obtenerPerfil() {
      if (token) {
        const datos = await obtenerUsuarioJSON(token, navigate);
        establecerInfoUsuario(datos);
      }
    }
    obtenerPerfil();
  }, []);

  useEffect(() => {
    async function obtenerArtistasSeguidos() {
      if (token) {
        const datos = await obtenerArtistasSeguidosJSON(
          token,
          numeroArtistas,
          navigate
        );
        establecerArtistasSeguidos(datos.artists.items);
      }
    }
    obtenerArtistasSeguidos();
  }, []);

  const redireccionInicio = (event, navigate) => {
    navigate("/inicio");
  };

  return (
    <div className="home-container">
      <HeaderSecundario
        redireccionInicio={redireccionInicio}
        navigate={navigate}
        abrirenspotify={
          infoUsuario && Object.keys(infoUsuario).length > 0
            ? infoUsuario.uri
            : undefined
        }
      />

      <h1>Mi perfil</h1>
      {infoUsuario ? (
        Object.keys(infoUsuario).length > 0 ? (
          <div>
            <Usuario
              imagen={
                infoUsuario.images && infoUsuario.images[1]
                  ? infoUsuario.images[1].url
                  : ""
              }
              nombre={infoUsuario.display_name}
              email={infoUsuario.email}
              seguidores={
                infoUsuario.followers && infoUsuario.followers.total
                  ? infoUsuario.followers.total
                  : "0"
              }
            />
          </div>
        ) : (
          <p>No hay información disponible sobre el usuario.</p>
        )
      ) : (
        <p>Cargando...</p>
      )}

      <h2>Artistas a los que sigues</h2>

      <div className="artistas-container">
        {artistasSeguidos ? (
          artistasSeguidos.length > 0 ? (
            artistasSeguidos.map((artista, index) => (
              <Artista
                key={index}
                id={artista.id}
                imagen={
                  artista.images && artista.images[1]
                    ? artista.images[1].url
                    : ""
                }
                titulo={artista.name}
              />
            ))
          ) : (
            <p>El usuario no tiene artistas seguidos.</p>
          )
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
}
