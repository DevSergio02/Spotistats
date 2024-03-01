import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  obtenerTokenAlmacenado,
  obtenerCancionJSON,
  extraerID,
  conversionDuracionCancion,
} from "../../api/API";
import HeaderCancion from "../../components/headers/Cancion";
import { Cancion as CancionDetalles } from "../../components/info/Cancion";
import "../../styles/info/Cancion.css";

export function Cancion() {
  const navigate = useNavigate();
  const [infoCancion, establecerInfoCancion] = useState();
  const token = obtenerTokenAlmacenado();

  const id = extraerID();

  useEffect(() => {
    async function obtenerInfoCancion() {
      if (token) {
        try {
          const datos = await obtenerCancionJSON(token, id, navigate);
          establecerInfoCancion(datos);
        } catch {
          console.error("Error al obtener información de la canción: ", error);
        }
      }
    }
    obtenerInfoCancion();
  }, []);

  const redireccionInicio = (event, navigate) => {
    navigate("/inicio");
  };

  return (
    <div className="home-container">
      <HeaderCancion
        redireccionInicio={redireccionInicio}
        navigate={navigate}
        abrirenspotify={infoCancion ? infoCancion.uri : undefined}
      />
      <h1>Información de la canción</h1>
      {infoCancion ? (
        infoCancion.error ? (
          <div>
            <h2>Error</h2>
            <p>
              Es posible que la canción no exista, o haya un problema con la API
              de Spotify
            </p>
          </div>
        ) : (
          <CancionDetalles
            imagen={
              infoCancion.album.images && infoCancion.album.images[1]
                ? infoCancion.album.images[1].url
                : ""
            }
            nombre={infoCancion.name}
            artistas={
              infoCancion.artists && infoCancion.artists.length > 0
                ? infoCancion.artists.map((artista) => artista.name).join(", ")
                : ""
            }
            duracion={conversionDuracionCancion(infoCancion.duration_ms)}
            abrirenspotify={infoCancion.uri}
          />
        )
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
