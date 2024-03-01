# ![logo][] Spotistats

Un proyecto hecho en React para mostrar una lista con los artistas y canciones más escuchadas de cualquier cuenta de Spotify que inicie sesión en ella. 

[logo]: https://raw.githubusercontent.com/DevSergio02/Spotistats/main/resources/logo.svg

<img src="/resources/screenshots/v1.png" width="850">

## Introducción 

Esta aplicación se inspira en otras aplicaciones de ámbito similar como Last.fm o Stats.fm, que muestran información sobre las canciones y artistas más escuchados por un usuario de Spotify en concreto. Ha sido desarrollada utilizando React junto con el servidor de desarrollo local Vite y utilizando la API oficial de Spotify para obtener toda la información necesaria, para la asignatura de Desarrollo web en entorno cliente y el centro de formación profesional IES Azarquiel. 

## Características

- [x] La aplicación se autentica utilizando el estándar de autorización OAuth2 proporcionado por Spotify.
- [x] La aplicación obtiene un token de inicio de sesión tras la autenticación, el cual tiene una duración de 3600 segundos (1 hora).
- [x] La aplicación muestra un listado de artistas y canciones más escuchadas por el usuario, permitiendo personalizar el número de elementos mostrados y el período de tiempo. Estos períodos incluyen las últimas 4 semanas, últimos 6 meses y todo el tiempo.
- [x] La aplicación muestra información básica sobre los artistas y canciones listadas al hacer clic en ellos. También es posible mostrar información sobre cualquier artista o canción utilizando su ID proporcionado por Spotify y accediendo manualmente desde la barra de direcciones.
- [x] La aplicación muestra información básica sobre la cuenta de Spotify que ha iniciado sesión, además de un pequeño listado de artistas seguidos por el usuario.
- [x] La aplicación puede cerrar la sesión del usuario si es necesario.
- [x] La aplicación gestiona diversos errores durante su ejecución, tales como token expirado o no válido, ID inválido durante la visualización de información de canciones o artistas, falta de información en la cuenta de usuario, entre otros.

## Hooks que utiliza
- [x] useEffect()
- [x] useState()
- [x] useNavigate()
