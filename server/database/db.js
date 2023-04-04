import mongoose from "mongoose";
const Connection = async () => {
  try {
    const url =
      "mongodb+srv://sem6:yE08K7gGaEHD449s@thriftbazaar.asndmtr.mongodb.net/?retryWrites=true&w=majority";
    mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log("database connected successfully");
  } catch (error) {
    console.log("error while connecting to databse ", error);
  }
};

export default Connection;