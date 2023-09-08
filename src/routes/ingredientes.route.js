import Router from "express";
import { getIngredientes, getIngredientesWithStockLessThan400, aumentarPrecioIngredientes } from "../controllers/ingredientes.controller.js";

const app = Router();

app.get('/', getIngredientes);
app.get('/less-stock', getIngredientesWithStockLessThan400);
app.patch('/increase-price', aumentarPrecioIngredientes)

export default app;

