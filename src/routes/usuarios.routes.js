const { Router } = require("express");
const router = Router(); 

const {renderSignUpForm, renderSigninForm, signin,signup,logout}=require('../controllers/usuarios.control')

router.get('/usuarios/registro', renderSignUpForm);

router.post('/usuarios/registro',signup);

router.get('/usuarios/inscrito',renderSigninForm);

router.post('/usuarios/inscrito',signin);

router.get('/usuarios/cerrar',logout);

module.exports = router;