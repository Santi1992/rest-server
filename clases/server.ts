import express from 'express'
import { SERVER_PORT } from '../global/enviroment';
import socketIO from 'socket.io';
import http from 'http';
import * as socket from '../sockets/sockets'


export default class Server {

    private static _instance: Server
    public app: express.Application;
    public port: number;
    public io: socketIO.Server;
    // io muy parecido a la conexion app de express
    // Sockey y express no son compatibles, hay que usar un intermediario para eso uso http
    private httpServer: http.Server

    private constructor(){
        this.app = express()
        this.port = SERVER_PORT;
        this. httpServer = new http.Server(this.app)
        this.io = socketIO(this.httpServer)
        this.escucharSockets();

    }

    public static get instance(){
        return this._instance || (this._instance = new this())
    }
// Acá se crean todos los eventos. !

// El io sabe quienes estan conectados. 
    private escucharSockets(){
       console.log('Escuchando sockets');
       this.io.on('connection',cliente =>{
           console.log('Nuevo cliente conectado');

        //mensaje
           socket.mensaje(cliente, this.io)
        // Cuando se desconecta.
           socket.desconectar(cliente);
                   
       })            

    }

    start(callback: any){
        this.httpServer.listen(this.port,callback);
    }

}