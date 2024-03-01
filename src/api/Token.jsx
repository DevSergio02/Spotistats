import { useEffect } from "react";

export function extraerToken() {
  const token = localStorage.getItem("token");
  if (!token) {
    const url = window.location.href;
    const tokenAcceso = url.substring(url.indexOf("=") + 1, url.indexOf("&"));
    localStorage.setItem("token", tokenAcceso);
  }
}

export function iniciarSesion(navigate) {
  extraerToken();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/inicio");
    }
  }, []);
}
