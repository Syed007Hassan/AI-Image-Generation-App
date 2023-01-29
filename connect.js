import app from "./index.js";
import mongoose from "mongoose";

mongoose.set("strictQuery", false);

//creating a Places db after / localhost
const connectDb = async function main() {
  await mongoose.connect(
    "mongodb+srv://admin-hassan:" +
      process.env.MONGOATLASPASWORD +
      "@cluster0.yipmq.mongodb.net/dalle"
  );
  console.log("MongoDB Server is up and running");
};

export default connectDb;
