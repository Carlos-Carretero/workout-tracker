const express = require("express");
const { port } = require('./config/env'); 
const app = express();

app.get("/", (req, res) => {
  res.send("Hola mi server en Express 💩");
});

// Inicio del servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});