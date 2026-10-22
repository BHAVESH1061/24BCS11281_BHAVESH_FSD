const express = require("express");
const router = express.Router();

let products = require("../data/products");

router.get("/", (req, res) => {
    res.json(products);
});


router.post("/", (req, res) => {

    const { name, price } = req.body;

    const newProduct = {
        id: products.length > 0
            ? products[products.length - 1].id + 1
            : 1,
        name: name,
        price: price
    };

    products.push(newProduct);

    res.status(201).json({
        message: "Product added"
    });
});


router.put("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const { name, price } = req.body;

    product.name = name;
    product.price = price;

    res.json({
        message: "Product updated"
    });
});


router.patch("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const { name, price } = req.body;

    if (name !== undefined) {
        product.name = name;
    }

    if (price !== undefined) {
        product.price = price;
    }

    res.json({
        message: "Product partially updated"
    });
});


router.delete("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const productIndex = products.findIndex(p => p.id === id);

    if (productIndex === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    products.splice(productIndex, 1);

    res.json({
        message: "Product deleted"
    });
});


module.exports = router;