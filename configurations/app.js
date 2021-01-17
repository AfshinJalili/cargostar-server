"use strict";

import express from "express";
import bodyParser from "body-parser";
import {errorHandlerMiddleware} from "../middlewares/error.middleware.js";

import productRouter from "../routes/product.route.js"
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/product/", productRouter);
app.use(errorHandlerMiddleware);

export default app;