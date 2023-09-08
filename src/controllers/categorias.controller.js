import Categoria from "../models/Categorias.js";

const findNameAndDescriptionAllCategories = async(req, res)=>{
  try {
    const categorias = await Categoria.find();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({ message: "Error al buscar la descripcion de todas las categorias" });
  }
}

export {
  findNameAndDescriptionAllCategories
}