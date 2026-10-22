const express = require("express");

const app = express();

const productRoutes = require("./routes/productRoutes");


app.use(express.json());

app.use("/products", productRoutes);


app.get("/", (req, res) => {
    res.send("Product Management API is running");
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});