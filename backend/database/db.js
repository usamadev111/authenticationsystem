import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/authentication-system`);
    console.log("mongodb connected sucessfully");
  } catch (error) {
    console.log("mongodb connection error", error);
  }
};

export default connectDB;
