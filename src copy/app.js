const express = require("express"); //importar la libreria 
const exphbs = require("express-handlebars"); //importar la libreria express-handlebars
const indexRoutes = require("./routes/index.routes"); //llamo al modulo routes
const path = require("path"); //libreria que sirve para concatenar directorios o carpetas
const app = express(); //creo el modulo app
const morgan = require("morgan");// creo el paquete morgan
const {use}  = require("./routes/index.routes");

app.set("views", path.join(__dirname, "views")); //dirname es para encontrar ruta a la carpeta views
app.engine(
  '.hbs', 
 exphbs.engine  ({                                //crea la configuracion para el motor de plantilla                               
      //sirve para indicar que motor de plantilla se esta utilizando ".hbs"
      //layout nos evitar tener que repetir codigo
    layoutsDir: path.join(app.get("views"), "layouts"), //sirve para encontrar la carpeta ./views/layouts
    partialsDir: path.join(app.get("views"), "partials"), //sirve para encontrar los archivos de la carpeta ./views/partials
    espDir: path.join(app.get("views"), "esp"),
    defaultLayout: "main", //sirve para encontrar por defecto main de /views/layouts
    extname: '.hbs',                   //indicamos cual es la extencion va a tomar
  })
);
app.set("view engine", ".hbs"); //establecer el motor de plantilla

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
//Rutas Routes
app.use(indexRoutes);
module.exports = app; //exporto el modulo app
