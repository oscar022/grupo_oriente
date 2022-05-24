
const  mongoose  = require("mongoose");
const {Schema}= require("mongoose"); //aldair

//*
(async()=>{
try{
    const db = await mongoose.connect("mongodb://0.0.0.0:27017/");  //direccion de mongoDB
    console.log("DB connected to", db.connection.name);
}catch(error){
    console.error(error);
}
})();

//mongodb+srv://diego:<diego>@cluster0.uup6g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

//*/
/*
//aldair
const connectionStrting = 'mongodb+srv://xdaoox:aldair@goriente.du5el.mongodb.net/test'
//conectar con el servidor de mongo
//mongodb+srv://xdaoox:<password>@goriente.du5el.mongodb.net/test
//mongodb+srv://xdaoox:<aldair>@goriente.du5el.mongodb.net/test
// conexion a mongodb
const appdata= mongoose.connect(connectionStrting, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
})
  .then(() => {
      console.log('Database connected')
  }).catch(err => {
      console.error(err)

  })
const noteSchema = new Schema({
    
})

//cod para conectar con notas.js
*/
//module.exports = appdata; //exporto el modulo app