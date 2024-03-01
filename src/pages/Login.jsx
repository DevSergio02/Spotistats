import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/spotify.svg";
import { iniciarSesion } from "../api/Token";
import "../styles/Login.css";

export function Login() {
  const navigate = useNavigate();
  iniciarSesion(navigate);
  return (
    <div className="login-container">
      <div>
        <img src={logo} className="logoSpotify" alt="Logo de Spotify" />
      </div>
      <h1 className="titulo">Spotistats</h1>
      <a
        href={`${import.meta.env.VITE_AUTH_ENDPOINT}?client_id=${
          import.meta.env.VITE_CLIENT_ID
        }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&scope=${
          import.meta.env.VITE_SCOPES
        }&response_type=${import.meta.env.VITE_RESPONSE_TYPE}`}
      >
        <button>Iniciar sesión</button>
      </a>
      <p className="copyright">2024 © IES Azarquiel</p>
    </div>
  );
}
