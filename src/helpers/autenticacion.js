const helpers ={};
//helpers usa el metodo isAuthenticated para validar los usuarios
helpers.isAuthenticated =(req, res, next)=>{
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/usuarios/inscrito');
}

module.exports = helpers;