"use strict";

import express from "express";
import {tryCatch} from "../middlewares/tryCatch.middleware.js";
import {getAllProducts} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/search", tryCatch(getAllProducts)); // get all product

router.get("search/:tag"); // get by tag

router.get("/brand/:name"); // get by brand

export default router;