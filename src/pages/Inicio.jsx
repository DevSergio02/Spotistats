import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { obtenerTokenAlmacenado, obtenerDatosJSON } from "../api/API.jsx";
import HeaderPrincipal from "../components/headers/Principal.jsx";
import Artista from "../components/Artista";
import Cancion from "../components/Cancion";
import "../styles/Inicio.css";

export function Inicio() {
  const navigate = useNavigate();
  const [periodoArtistas, establecerPeriodoArtistas] = useState("long_term");
  const [numeroArtistas, establecerNumeroArtistas] = useState("5");
  const [periodoCanciones, establecerPeriodoCanciones] = useState("long_term");
  const [numeroCanciones, establecerNumeroCanciones] = useState("5");
  const [artistas, establecerArtistas] = useState();
  const [canciones, establecercanciones] = useState();

  const token = obtenerTokenAlmacenado(navigate);

  useEffect(() => {
    async function obtenerArtistas() {
      if (token) {
        const datos = await obtenerDatosJSON(
          "artists",
          periodoArtistas,
          token,
          numeroArtistas,
          navigate
        );
        establecerArtistas(datos.items);
      }
    }
    obtenerArtistas();
  }, [periodoArtistas, numeroArtistas]);

  useEffect(() => {
    async function obtenerCanciones() {
      if (token) {
        const datos = await obtenerDatosJSON(
          "tracks",
          periodoCanciones,
          token,
          numeroCanciones,
          navigate
        );
        establecercanciones(datos.items);
      }
    }
    obtenerCanciones();
  }, [periodoCanciones, numeroCanciones]);

  const gestionarPeriodoArtistas = (event) => {
    establecerPeriodoArtistas(event.target.value);
  };

  const gestionarNumeroArtistas = (event) => {
    establecerNumeroArtistas(event.target.value);
  };

  const gestionarPeriodoCanciones = (event) => {
    establecerPeriodoCanciones(event.target.value);
  };

  const gestionarNumeroCanciones = (event) => {
    establecerNumeroCanciones(event.target.value);
  };

  const redireccionPerfil = (event, navigate) => {
    navigate("/perfil");
  };

  const cerrarSesion = (event, navigate) => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="home-container">
      <HeaderPrincipal
        redireccionPerfil={redireccionPerfil}
        cerrarSesion={cerrarSesion}
        navigate={navigate}
      />

      <div className="artistas-header-container">
        <h1>Artistas más escuchados</h1>
        <div className="select-input-container">
          <select value={periodoArtistas} onChange={gestionarPeriodoArtistas}>
            <option value="short_term">Últimas 4 semanas</option>
            <option value="medium_term">Últimos 6 meses</option>
            <option value="long_term">Desde siempre</option>
          </select>

          <input
            onChange={gestionarNumeroArtistas}
            type="number"
            id="numero"
            name="numero"
            value={numeroArtistas}
            min="1"
            max="50"
          />
        </div>
      </div>

      <div className="artistas-container">
        {artistas ? (
          artistas.length > 0 ? (
            artistas.map((artista, index) => (
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
            <p>El usuario no tiene artistas escuchados.</p>
          )
        ) : (
          <p>Cargando...</p>
        )}
      </div>
      <div className="artistas-header-container">
        <h1>Canciones más escuchadas</h1>
        <div className="select-input-container">
          <select value={periodoCanciones} onChange={gestionarPeriodoCanciones}>
            <option value="short_term">Últimas 4 semanas</option>
            <option value="medium_term">Últimos 6 meses</option>
            <option value="long_term">Desde siempre</option>
          </select>
          <input
            onChange={gestionarNumeroCanciones}
            type="number"
            id="numero"
            name="numero"
            value={numeroCanciones}
            min="1"
            max="50"
          />
        </div>
      </div>

      <div className="canciones-container">
        {canciones ? (
          canciones.length > 0 ? (
            canciones.map((cancion, index) => (
              <Cancion
                key={index}
                id={cancion.id}
                imagenUrl={
                  cancion.album &&
                  cancion.album.images &&
                  cancion.album.images[1]
                    ? cancion.album.images[1].url
                    : ""
                }
                titulo={cancion.name}
              />
            ))
          ) : (
            <p>El usuario no tiene canciones escuchadas. </p>
          )
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
}
