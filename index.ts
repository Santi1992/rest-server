import Server from "./clases/server";
import {router} from "./routes/router";
import bodyParser from 'body-parser';
import cors from 'cors';



const server = new Server()

// Body parser
// Es un middleware - Lo que te envien tomalo y genera un objeto de js
server.app.use(bodyParser.urlencoded({ extended: true}))
server.app.use(bodyParser.json())

// Cors
server.app.use(cors({origin: true, credentials:true}))



// Rutas de servicios
server.app.use("/", router)

server.start(() =>{
    console.log(`servidor corrientdo en el puerto ${server.port}`);
    
})