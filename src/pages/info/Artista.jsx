import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  obtenerTokenAlmacenado,
  obtenerArtistaJSON,
  extraerID,
} from "../../api/API";
import HeaderArtista from "../../components/headers/Artista";
import { Artista as ArtistaDetalles } from "../../components/info/Artista";
import "../../styles/info/Artista.css";

export function Artista() {
  const navigate = useNavigate();
  const [infoArtista, establecerInfoArtista] = useState();

  const token = obtenerTokenAlmacenado();
  const id = extraerID();

  useEffect(() => {
    async function obtenerInfoArtista() {
      if (token) {
        try {
          const datosArtista = await obtenerArtistaJSON(token, id, navigate);
          establecerInfoArtista(datosArtista);
        } catch (error) {
          console.error("Error al obtener información del artista:", error);
        }
      }
    }
    obtenerInfoArtista();
  }, []);

  const redireccionInicio = (event, navigate) => {
    navigate("/inicio");
  };

  return (
    <div className="home-container">
      <HeaderArtista
        redireccionInicio={redireccionInicio}
        navigate={navigate}
        abrirenspotify={infoArtista ? infoArtista.uri : undefined}
      />
      <h1>Información del artista</h1>
      {infoArtista ? (
        infoArtista.error ? (
          <div>
            <h2>Error</h2>
            <p>
              Es posible que el artista no exista, o haya un problema con la API
              de Spotify
            </p>
          </div>
        ) : (
          <ArtistaDetalles
            imagen={
              infoArtista.images && infoArtista.images[1]
                ? infoArtista.images[1].url
                : ""
            }
            nombre={infoArtista.name}
            seguidores={
              infoArtista.followers && infoArtista.followers.total
                ? infoArtista.followers.total
                : ""
            }
            popularidad={infoArtista.popularity}
            generos={
              infoArtista.genres && infoArtista.genres.length > 0
                ? infoArtista.genres.join(", ")
                : "Este artista no tiene géneros asignados."
            }
            abrirenspotify={infoArtista.uri}
          />
        )
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
