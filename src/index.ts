import express from "express";
import { ProductService } from "./modules/products/product.service";
import { ProductRepository } from "./modules/products/product.repository";
const app = express();

const test = new ProductService(new ProductRepository());

app.get("/", (req, res) => {
    test.getProducts();
    res.send("Hello World!");
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});