const Products = require("../controllers/product.controller");

module.exports = app => {
    app.get("/api/product", Products.getAll);
    app.post("/api/product", Products.create);
    app.get("/api/product/:_id", Products.getOne);
    app.put("/api/product/:_id", Products.update);
    app.delete("/api/product/:_id", Products.remove);
}
