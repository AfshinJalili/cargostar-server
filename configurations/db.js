"use strict";

import mongoose from "mongoose";
import environment from "./environment.js";
import logger from "./logger.js"

export function connectToDatabase() {
         mongoose.connect(environment.mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
            .then(() => logger.info("Connected to MongoDB successfully!"))
            .catch(() => logger.error("Failed to connect to MongoDB!"));

        mongoose.Connection.on("error",() => logger.error("MongoDB connection ERROR!"));
        mongoose.Connection.on("disconnected",() => logger.error("Disconnect from MongoDB!"));
}