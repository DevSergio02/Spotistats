import { useEffect } from "react";

export function obtenerTokenAlmacenado(navigate) {
  const tokenAlmacenado = localStorage.getItem("token");
  useEffect(() => {
    if (!tokenAlmacenado) {
      navigate("/");
    }
  }, []);
  return tokenAlmacenado;
}

export async function obtenerDatosJSON(
  tipo,
  periodo,
  token,
  cantidad,
  navigate
) {
  const url = `https://api.spotify.com/v1/me/top/${tipo}?time_range=${periodo}&limit=${cantidad}`;
  const respuesta = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  gestionErrores(respuesta, navigate);
  const datos = await respuesta.json();
  return datos;
}

export async function obtenerUsuarioJSON(token, navigate) {
  const url = `https://api.spotify.com/v1/me`;
  const respuesta = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  gestionErrores(respuesta, navigate);
  const datos = await respuesta.json();
  return datos;
}

export async function obtenerArtistasSeguidosJSON(token, cantidad, navigate) {
  const url = `https://api.spotify.com/v1/me/following?type=artist&limit=${cantidad}`;
  const respuesta = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  gestionErrores(respuesta, navigate);
  const datos = await respuesta.json();
  return datos;
}

export async function obtenerArtistaJSON(token, id, navigate) {
  const url = `https://api.spotify.com/v1/artists/${id}`;
  const respuesta = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  gestionErrores(respuesta, navigate);
  const datos = await respuesta.json();
  return datos;
}

export async function obtenerCancionJSON(token, id, navigate) {
  const url = `https://api.spotify.com/v1/tracks/${id}`;
  const respuesta = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  gestionErrores(respuesta, navigate);
  const datos = await respuesta.json();
  return datos;
}

export function extraerID() {
  const url = window.location.href;
  const id = url.substring(url.lastIndexOf("/") + 1);
  return id;
}

export function conversionDuracionCancion(milisegundos) {
  const segundosTotales = milisegundos / 1000;
  const minutos = Math.floor(segundosTotales / 60);
  const segundos = Math.floor(segundosTotales % 60);
  return `${minutos}:${segundos < 10 ? "0" : ""}${segundos}`;
}

export function gestionErrores(respuesta, navigate) {
  if (respuesta.status === 200) {
    console.info(
      "Se ha obtenido la información de la API de Spotify con éxito."
    );
  } else if (respuesta.status === 401) {
    localStorage.removeItem("token");
    navigate("/");
    console.warn(
      "Se ha cerrado la sesión debido a que el token ha expirado, o no es válido."
    );
  } else {
    console.error(
      "Se ha producido un error " +
        respuesta.status +
        " al obtener la información de la API de Spotify."
    );
  }
}
