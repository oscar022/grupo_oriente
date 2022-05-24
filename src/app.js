const express = require("express"); //importar la libreria 
const exphbs = require("express-handlebars"); //importar la libreria express-handlebars
const path = require("path"); //libreria que sirve para concatenar directorios o carpetas
const morgan = require("morgan");// creo el paquete morgan
const handlebars = require('handlebars');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');


//initializations
const app = express(); //creo el modulo app
require('./config/passport');

//mensajeria
const http=require('http')
const server=http.createServer(app)

const socketio=require('socket.io');
const io = socketio.listener = (server);

//const {Server}=require('socket.io');
//const io = new Server(server);


io.on('connection',(socket)=>{
  console.log('un usuario se ha conectado')
})

//settings
app.set('port',process.env.PORT || 3000)
app.set("views", path.join(__dirname, "views")); //dirname es para encontrar ruta a la carpeta views

//motor de plantillas 
app.engine(
  '.hbs', 
 exphbs.engine  ({                                //crea la configuracion para el motor de plantilla                               
      //sirve para indicar que motor de plantilla se esta utilizando ".hbs"
      //layout nos evitar tener que repetir codigo
    layoutsDir: path.join(app.get("views"), "layouts"), //sirve para encontrar la carpeta ./views/layouts
    partialsDir: path.join(app.get("views"), "partials"), //sirve para encontrar los archivos de la carpeta ./views/partials
    espDir: path.join(app.get("views"), "esp"),
    tareaDir:path.join(app.get("views"),"tareas"),
    clienteDir:path.join(app.get("views"), "clientes"),
    usuariosDir:path.join(app.get("views"),"usuarios"),
    mensajesDir:path.join(app.get("views"),"chat"),
    defaultLayout: "main", //sirve para encontrar por defecto main de /views/layouts
    extname: '.hbs',                   //indicamos cual es la extencion va a tomar
    handlebars: handlebars 
  })
);
app.set("view engine", ".hbs"); //establecer el motor de plantilla



//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(session({
  secret:'secret',  //contraseña
  resave: true,
  saveUninitialized:true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//variables globales
app.use((req, res,next)=>{
  res.locals.success_msg=req.flash('success_msg');
  res.locals.error_msg=req.flash('error_msg');
  res.locals.error=req.flash('error');
  res.locals.usuarios= req.user || null;
  next();
});

//Rutas Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/tareas.routes'));
app.use(require('./routes/clientes.routes'));
app.use(require('./routes/usuarios.routes'));
app.use(require('./routes/chat.routes'));
 
//static file
app.use(express.static(path.join(__dirname,'public')));


module.exports = app; //exporto el modulo app