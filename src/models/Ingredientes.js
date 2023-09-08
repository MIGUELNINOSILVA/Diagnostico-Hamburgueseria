import mongoose from "mongoose";

const ingredientesSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  }
});

const Ingredientes = mongoose.model("Ingredientes", ingredientesSchema);

export default Ingredientes;
