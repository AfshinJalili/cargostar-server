"use strict";

import Product from "../models/product.model.js"

export async function getAllProducts(req, res) {
    const products = await Product.find({});

    res.json({ products });
}

