const express = require("express"); //importar la libreria express
const indexRoutes = require("./routes/index.routes"); //llamo al modulo routes
const path = require("path"); //libreria que sirve para concatenar directorios o carpetas

const app = express(); //creo el modulo app


//Rutas Routes
app.use(indexRoutes);
module.exports = app; //exporto el modulo app
