const { Router } = require("express");
const router = Router(); 

const{leerchat}=require('../controllers/chat.control');

router.get('/mensajes', leerchat);


module.exports = router;