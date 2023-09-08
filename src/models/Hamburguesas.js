import mongoose from "mongoose";

const hamburguesasSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    required: true
  },
  ingredientes: {
    type: Array,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  chef: {
    type: String,
    required: true
  }
});

const Hamburguesas =  mongoose.model('Hamburguesa', hamburguesasSchema);

export default Hamburguesas;

