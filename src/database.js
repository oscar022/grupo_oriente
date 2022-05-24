
const  mongoose  = require("mongoose");
//const {Schema}= require("mongoose"); //aldair

const MONGODB_URI = "mongodb://0.0.0.0:27017/";
//process.env.MONGODB_URI
//"mongodb://0.0.0.0:27017/"
//"mongodb+srv://<username>:<password>@orient.uup6g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


// conexion a mongodb
mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    //useCreateIndex: true
   
})

    .then(db => console.log('Database connected'))
    .catch(err => console.log(err))





