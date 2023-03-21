import app from "./index.js";
import mongoose from "mongoose";

mongoose.set("strictQuery", false);

//creating a db connection
const connectDb = async () => {
  await mongoose.connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB Server is up and running");
};

export default connectDb;
