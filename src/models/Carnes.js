import mongoose from "mongoose";

const ChefSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  especialidad: {
    type: String,
    required: true
  }
});

const Chef = mongoose.model('Chef', ChefSchema);

export default Chef;
