const { Schema, model } =require ("mongoose");
 

const UsuarioSchema = new Schema(
  {
    usuario: { 
      type: String, 
      required: true, 
      trim: true, 
      unique: true },
    contraseña: {
      type: String,
      trim: true, //quita los espacios inecesarios del string
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//export.defaultmodel("Task", TaskSchema);
module.exports=model ("usuarios",UsuarioSchema);