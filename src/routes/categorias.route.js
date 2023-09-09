import Router from "express";
import { findNameAndDescriptionAllCategories } from "../controllers/categorias.controller.js";

const categoria = Router();

categoria.get('/', findNameAndDescriptionAllCategories);

export default categoria;
