const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path"); // Módulo para trabajar con rutas de archivos
const cors = require("cors");
const port = 3000;

//Ponemos CORS para permitir al front hacer los llamados.
app.use(cors({ origin: "http://localhost:4000" }));

// Configura Express para servir archivos estáticos desde la carpeta "resource"
app.use("/resource", express.static("resource"));
app.get("/playlist", (req, res) => {
  const filePath = path.join(__dirname, "resource", "playlist-inicial.json");

  // Lee el archivo JSON usando el módulo fs
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo JSON:", err);
      res
        .status(500)
        .json({ error: "Error al obtener la lista de reproducción" });
      return;
    }

    try {
      const playlist = JSON.parse(data);
      res.json(playlist);
    } catch (parseError) {
      console.error("Error al analizar el archivo JSON:", parseError);
      res
        .status(500)
        .json({ error: "Error al analizar la lista de reproducción" });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
