const { Schema, model } =require ("mongoose");
 

const TaskSchema = new Schema(
  {
    titulo: { 
      type: String, 
      required: true, 
      trim: true, 
      //unique: true //unico sin repetir
    },
    descripcion: {
      type: String,
      required: true, 
      trim: true, //quita los espacios inecesarios del string
    },
    done: { type: Boolean, default: false,},
    
    user: {
      type: String,
      required:true
    },
  },{
    timestamps: true,
  
  }
);

//export.defaultmodel("Task", TaskSchema);
module.exports=model ("Task",TaskSchema, "actividades");