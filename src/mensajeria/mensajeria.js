const app = require( "../app" );
//mensajeria
const http=require('http')
const server=http.createServer(app)

//const socketio=require('socket.io');
//const io = socketio.listener = (server);

const {Server}=require('socket.io');
const io = new Server(server);


io.on('connection',(socket)=>{
  console.log('un usuario se ha conectado')
})

app.get('/mensajes', (req, res)=>{
 res.sendFile(`${__dirname}/views/esp/mensajes/chat.http`)
})

//server.listen(3000, ()=>{
    console.log('servidor en http')
//})