import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login.jsx";
import { Inicio } from "./pages/Inicio.jsx";
import { Perfil } from "./pages/Perfil.jsx";
import { Artista } from "./pages/info/Artista.jsx";
import { Cancion } from "./pages/info/Cancion.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/inicio",
    element: <Inicio />,
  },
  {
    path: "/perfil",
    element: <Perfil />,
  },
  {
    path: "/artista/:id",
    element: <Artista />,
  },
  {
    path: "/cancion/:id",
    element: <Cancion />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
