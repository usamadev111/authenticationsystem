import mongoose from "mongoose";
// import "dotenv/config";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Failed To Connect To Database");
  }
};

export default connectDB;
