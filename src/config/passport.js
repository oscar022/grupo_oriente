const passport=require('passport');
const usuarios = require('../models/usuarios');
const localStrategy = require('passport-local').Strategy;


passport.use(new localStrategy({
    usernameField:'email',
    passwordField:'contraseña' 
},async (email,contraseña, done)=>{

    //verificacion del correo
    const Vusuarios = await usuarios.findOne({email})
    if (!Vusuarios){
        return done (null, false,{message:'usuario inexistente'});
    }else{
        //verificar contraseña
        const match=await Vusuarios.matchPassword(contraseña);
        if(match){
            //console.log(Vusuarios)
            return done(null,Vusuarios);
        }else{
            return done(null,false,{message:'contraseña equivocada'});
        }
    }
}));

passport.serializeUser((Vusuarios,done)=>{
    done( null, Vusuarios.id);
});

passport.deserializeUser((id,done)=>{
    usuarios.findById(id,(err,Vusuarios)=>{
        done(err,Vusuarios);
    })
    
});