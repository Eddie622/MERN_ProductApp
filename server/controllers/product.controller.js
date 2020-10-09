const Product = require("../models/product.model");

class ProductController {
    create(req, res) {
        const newProduct = new Product(req.body);
        newProduct.save()
            .then( () => res.json(newProduct) )
            .catch( errors => res.json(errors) );
    }
    getAll(req, res) {
        Product.find().sort("start")
            .then( product => res.json(product) )
            .catch( errors => res.json(errors) );
    }
    getOne(req, res) {
        Product.findOne({_id: req.params._id})
            .then( activity => res.json(activity) )
            .catch( errors => res.json(errors) );
    }
    update(req, res) {
        Product.findByIdAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
            .then( () => res.json({msg: "ok"}) )
            .catch( errors => res.json(errors) );
    }
    remove(req, res) {
        Product.findByIdAndRemove({_id: req.params._id})
            .then( () => res.json({msg: "ok"}) )
            .catch( errors => res.json(errors) );
    }
}

module.exports = new ProductController();
