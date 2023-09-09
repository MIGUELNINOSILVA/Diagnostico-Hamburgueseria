import Router from "express";
import { getIngredientes, getIngredientesWithStockLessThan400, aumentarPrecioIngredientes } from "../controllers/ingredientes.controller.js";

const app = Router();

/**
 * @swagger
 * /api/ingredientes:
 *   get:
 *     summary: Obtiene todos los ingredientes.
 *     tags:
 *       - Ingredientes
 *     responses:
 *       200:
 *         description: Respuesta exitosa. Devuelve una lista de ingredientes.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ingrediente'
 */


app.get('/', getIngredientes);
app.get('/less-stock', getIngredientesWithStockLessThan400);
app.patch('/increase-price', aumentarPrecioIngredientes)

export default app;

