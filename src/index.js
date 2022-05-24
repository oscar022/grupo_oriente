require ('dotenv').config();
const app = require( "./app" ); //mando a llamar el modulo app
require ('./database');

//appdata.listen(3000)
/*app.listen(3000)
   console.log("Server on port", 3000);
   */

app.listen(app.get('port'),()=>{
    console.log("Server on port", app.get('port'));
});


