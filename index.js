import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDb from "./connect.js";
import bodyParser from "body-parser";
import path from "path";

import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//middleware
app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

// serving the frontend
app.use(express.static(path.join(__dirname, "./client/dist")));

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "./client/dist/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

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
