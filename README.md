# Servidor de Musica.

## Como implementar la API

En el `index.js` vas a encontrar esta siguiente linea de codigo:

```js
//Ponemos CORS para permitir al front hacer los llamados.
app.use(cors({ origin: "http://localhost:4000" }));
```

En mi caso, estuve probandolo con el frontend que tenia desarrollado en el [reproductor de musica](https://github.com/JuanFPaz/reproductor-de-musica), y le asigne un puerto `4000`.

En tu caso que usas react, podes cambiarlo con el puerto que te brinde cuando lo ejecutes de prueba.

El puerto por defecto del servidor es el `3000`, si tenes algun problema con eso, podes cambiarlo en esta linea de codigo del `index.js`

```js
//linea 6
const port = 3000;

//linea 38
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
```

## Como acceder a las rutas de los audios e imagenes de los audios de la playlist.

El `JSON` nos envia la ruta estatica del servidor donde se encuentran alojados:

```json
    "songUrl": "resource/playlist/les-childish-gambino.mp3",
    "imageUrl": "resource/images/camp-childish.jpg",
```

Entonces nosotros para poder establecer el `src` del objeto `Audio` y la `url` para la imagen del album, construimos las `URL` utilizando la base del servidor, por ejemplo:

```js
//reproductor es el objeto audio
reproductor.src = `http://localhost:3000/${myPlaylist[indice].songUrl}`;

//album es el objeto del DOM para mostrar la imagen
album.style.backgroundImage = `url(http://localhost:3000/${myPlaylist[indice].imageUrl})`;
```

Ante cualquier duda o consulta, no olvides preguntarme :D