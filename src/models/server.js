import express from "express";
import cors from "cors";
import dbConnection from "../database/config.js";
import ingredientesRoute from "../routes/ingredientes.route.js";
import hamburguesasRoute from "../routes/hamburguesas.route.js";
import chefsRoute from "../routes/chef.route.js";
import categoriasRoute from "../routes/categorias.route.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" assert {type: 'json'};
import path from "path";
import { assert } from "console";
import { type } from "os";


class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.ingredientesPath = '/api/ingredientes';
    this.hamburguesasPath = '/api/hamburguesas';
    this.chefsPath = '/api/chefs';
    this.categoriasPath = '/api/categorias';
    this.connectDB();
    this.middlewares();
    //Swagger
        this.setupSwagger();
    this.routes();
    
  }

  async connectDB() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.ingredientesPath, ingredientesRoute);
    this.app.use(this.hamburguesasPath, hamburguesasRoute);
    this.app.use(this.chefsPath, chefsRoute);
    this.app.use(this.categoriasPath, categoriasRoute);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`SERVER RUNING ON PORT : ${this.port}`);
    });
  }

  setupSwagger() {
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}
}

export default Server;
