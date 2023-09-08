import express from "express";
import cors from "cors";
import dbConnection from "../database/config.js";

class Server {
  constructor(){
    this.app = express();
    this.port = process.ENV.port

  }

  async connectDB(){
    await dbConnection();
  }

  listen(){
    this.app.listen(this.port, () =>{
      console.log(`SERVER RUNING ON PORT : ${this.port}`);
    })
  }
}

export default Server;