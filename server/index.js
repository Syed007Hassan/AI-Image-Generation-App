import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDb from "./connect.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Node server is running on PORT: ${PORT}`);
  try {
    connectDb();
  } catch (err) {
    console.log(err);
  }
});

export default app;
