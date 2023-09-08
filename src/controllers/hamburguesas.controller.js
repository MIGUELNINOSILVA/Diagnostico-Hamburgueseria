import Hamburguesas from "../models/Hamburguesas.js";


const findAllVegetarianHamburguesas = async (req, res) => {
  try {
    const hamburguesas = await Hamburguesas.find({ categoria: "Vegetariana" });
    res.status(200).json(hamburguesas);
  } catch (error) {
    res.status(500).json({ message: "Error al buscar las hamburguesas vegetarianas" });
  }
}

const findAllHamburguesasByChefB = async (req, res) => {
  try {
    const hamburguesas = await Hamburguesas.find({ chef: "ChefB" });
    res.status(200).json(hamburguesas);
  } catch (error) {
    res.status(500).json({ message: "Error al buscar las hamburguesas preparadas por ChefB" });
  }
}



export {
  findAllVegetarianHamburguesas,
  findAllHamburguesasByChefB
}

