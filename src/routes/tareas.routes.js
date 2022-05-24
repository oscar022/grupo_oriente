const { Router } = require("express");
const router = Router(); 


const {RederNotesForm, createnewnote, RederNote, RederEdit, update, deletask}=require('../controllers/tareas.control');

//isAuthenticated es una funcion que restringe los datos a los usuarios no registrados
const {isAuthenticated}= require('../helpers/autenticacion')

//nueva tarea
router.get('/tareas/add', isAuthenticated,RederNotesForm);
router.post('/tareas/nueva-tarea', isAuthenticated, createnewnote);
//ver tareas
router.get('/tareas', isAuthenticated,RederNote);
//edit tareas
router.get('/tareas/edit/:id',isAuthenticated,RederEdit);
router.put('/tareas/edit/:id',update);
//eliminar tareas
router.delete('/tareas/delete/:id',isAuthenticated, deletask);

module.exports = router;