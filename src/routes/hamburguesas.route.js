import Router from "express";
import { findAllVegetarianHamburguesas, findAllHamburguesasByChefB } from "../controllers/hamburguesas.controller.js";

const app = Router();

app.get('/vegetarian',findAllVegetarianHamburguesas);
app.get('/hamburguer-chefB', findAllHamburguesasByChefB);

export default app;
