import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology : true
    });
    console.log('Db Online');
  } catch (error) {
    console.log(error);
    throw new Error ('DB Can not inicializes');
  }
}

export default dbConnection;