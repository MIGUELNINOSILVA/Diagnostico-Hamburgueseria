import Chef from "../models/Carnes.js";

const findAllCarnesChefs = async (req, res) => {
  try {
    const chefs = await Chef.find({ especialidad: "Carnes" });
    res.status(200).json(chefs);
  } catch (error) {
    res.status(500).json({ message: "Error al buscar los chefs de carnes" });
  }
}

export {
  findAllCarnesChefs
}