"use strict";

import mongoose from "mongoose";
import environment from "./environment.js";
import logger from "./logger.js";

export function connectToDatabase() {
    mongoose.connect(environment.mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
        .then(() => logger.info("Connected to MongoDB successfully!"))
        .catch(() => {
            throw new Error("Failed to connect to MongoDB!");
        });

    mongoose.connection.on("error", () => {
        throw new Error("MongoDB connection ERROR!");
    });
    mongoose.connection.on("disconnected", () => {
        throw new Error("Disconnect from MongoDB!");
    });
}