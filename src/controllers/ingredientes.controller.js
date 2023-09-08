import Ingredientes from "../models/Ingredientes.js";

const getIngredientes = async (req, res) => {
  try {
    const request = await Ingredientes.find();
    res.send(request);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error en el servidor");
  }
};

const getIngredientesWithStockLessThan400 = async (req, res) => {
  try {
    const request = await Ingredientes.find({ stock: { $lt: 400 } });
    res.send(request);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error en el servidor");
  }
};

const aumentarPrecioIngredientes = async (req, res) => {
  try {
    await Ingredientes.updateMany({}, { $mul: { precio: 1.5 } });
    console.log("Se aumentó el precio de todos los ingredientes en 1.5");
    res.status(200).json({msg: "Se aumentó el precio de todos los ingredientes en 1.5"});
  } catch (error) {
    console.log(error);
    res.status(500).send("Error en el servidor");
  }
};



export { getIngredientes, getIngredientesWithStockLessThan400,
  aumentarPrecioIngredientes };
