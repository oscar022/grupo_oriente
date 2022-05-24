const { Router } = require("express");
const res = require("express/lib/response");
const router = Router(); //creo el modulo router TaskSchema
const Task = require("../models/Task");
const Usuarios = require("../models/usuarios");

router.get("/", (req, res) => {
  res.render('index'); //render llama el texto de ./views/index.html
});

router.get("/ingles", (req, res) => {
  res.render('ingles'); //render llama el texto de ./views/index.html
});

router.get("/espanol", (req, res) => {
  res.render('espanol'); //render llama el texto de ./views/index.html
});

router.get("/sesion", (req, res) => {
  res.render('sesion'); //render llama el texto de ./views/index.html
});

router.post('/users/add', async (req, res) => {
 
  
  var usuarios= Usuarios(req.body)
  const usuarioguardado= await usuarios.save()
  
  console.log(usuarioguardado)
  res.send('saved')
});
/*
router.post('/tasks/add', (req, res)=>{
  var task = Task(req.body)
  console.log(task)
  res.send('saved')
})
*/
//español
router.get("/iniciar", (req, res) => {
  res.render('esp/iniciar'); //render llama el texto de ./views/index.html
 /* var n1=7;
  var n2=8;
  var suma= n1+n2;
  
  res.json({datos:suma})*/
});
router.get("/actividades_de_hoy", (req, res) => {
  res.render('esp/actividades_de_hoy'); //render llama el texto de ./views/index.html
});
router.get("/lista_de_clientes", (req, res) => {
  res.render('esp/lista_de_clientes'); //render llama el texto de ./views/index.html
});
router.get("/centro_de_mensajeria", (req, res) => {
  res.render('esp/centro_de_mensajeria'); //render llama el texto de ./views/index.html
});
router.get("/historial", (req, res) => {
  res.render('esp/historial'); //render llama el texto de ./views/index.html
});
router.get("/mas", (req, res) => {
  res.render('esp/mas'); //render llama el texto de ./views/index.html
});
//ingles
router.get("/login", (req, res) => {
  res.render('ingles/login'); //render llama el texto de ./views/index.html
});

module.exports = router; //exporto el modulo router
