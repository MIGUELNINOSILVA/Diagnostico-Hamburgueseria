import Router from "express";
import {findAllCarnesChefs} from "../controllers/chefs.controller.js";

const app = Router();

app.get('/especial-meet', findAllCarnesChefs);

export default app;