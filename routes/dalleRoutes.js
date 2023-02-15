import express from "express";

const dalleRoutes = express.Router();

import {
  getAllDalle,
  postDalle,
} from "../controllers/dalleRoutesController.js";

dalleRoutes.get("/", getAllDalle);

dalleRoutes.post("/", postDalle);

export default dalleRoutes;
