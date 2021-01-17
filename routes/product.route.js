"use strict";

import express from "express";


const router = express.Router();

router.get("/search"); // get all product

router.get("search/:tag"); // get by tag

router.get("/brand/:name"); // get by brand

export default router;