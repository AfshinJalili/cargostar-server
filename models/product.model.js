"use strict";

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true},
    cost: { type: Number, required: true, min: 0},
    count: { type: Number, required: true, min: 0},
    tags: { type: [String], required: true },
    images: { type: [Buffer] },
    description: { type: String }
});

export default mongoose.model("Product", productSchema);