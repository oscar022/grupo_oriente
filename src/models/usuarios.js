const { Schema, model } =require ("mongoose");
const bcrypt = require('bcryptjs');
 
const UsuarioSchema = new Schema(
  {
    nombre: { type: String, required: true, trim: true, },
    email:{ type: String, required: true, trim: true, unique:true,},  
    contraseña: { type: String, required: true, trim: true,},
  },  
  { 
    timestamps: true,
});

UsuarioSchema.methods.encryptPassword= async contraseña=>{
    const salt= await bcrypt.genSalt(10);
    return await bcrypt.hash(contraseña,salt);
}
UsuarioSchema.methods.matchPassword= async function(contraseña){
  return await bcrypt.compare(contraseña, this.contraseña)
}

module.exports=model ("usuarios",UsuarioSchema);