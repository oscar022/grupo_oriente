const { text } = require("express");
const usuariosCtrl = {};
const usuarios =require('../models/usuarios');
const passport = require('passport');

usuariosCtrl.renderSignUpForm = (req, res) => {
  res.render("esp/usuarios/registro");
};

usuariosCtrl.signup =async (req, res) => {
  const errors=[];
  const {nombre,email,contraseña,confirm_contraseña}=req.body;
  if (contraseña !=confirm_contraseña){
    errors.push({text: 'la contraseña no es igual'});
  }
  if (contraseña.length < 4){
    errors.push({text: 'tiene que tener mas de 4 caracteres'});
  }
  if (errors.length > 0){
    res.render('esp/usuarios/registro',{
      errors,
      nombre,
      email,
      contraseña,
      confirm_contraseña
    })
  }
  else {
    const emailusuario=await usuarios.findOne({email: email});
    if(emailusuario){
      req.flash('error_msg', 'correo ya existente.');
      res.redirect('/usuarios/registro');
    }
    else{
      const NUsuario = new usuarios ({nombre,email,contraseña});
      NUsuario.contraseña = await NUsuario.encryptPassword(contraseña);
      await NUsuario.save();
      req.flash('success_msg', 'estas registrado');
      res.redirect('/usuarios/inscrito');
    }
  }
};

usuariosCtrl.renderSigninForm = (req, res) => {
  res.render("esp/usuarios/inscrito");
};

usuariosCtrl.signin = passport.authenticate('local',{

  failureRedirect:'/usuarios/inscrito',
  successRedirect:'/iniciar',
  failureFlash:true
  
})

usuariosCtrl.logout = (req, res) => {
  req.logout();
  req.flash('success_msg','sesion cerrada');
  res.redirect('/usuarios/inscrito');
};

module.exports = usuariosCtrl;
