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
const dir = new URL(import.meta.url).pathname;
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//middleware
app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

// serving the frontend
app.use(express.static(path.join(dir, "./client/dist")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(dir, "./client/dist/index.html"), function (err) {
    res.status(500).send(err);
  });
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
