import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  // if the database is already connected , dont connect again

  if (connected) {
    console.log("Already connected to database");
    return;
  }

  // connect to the mongoDB database

  try {
    await mongoose.connect(process.env.MONGO_URI);
    connected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};


export default connectDB;