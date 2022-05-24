const app = require( "./app" ); //mando a llamar el modulo app
require ('./database');

//appdata.listen(3000)
app.listen(3000);
console.log("Server on port", 3000);
