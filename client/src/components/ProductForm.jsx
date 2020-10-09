import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = props => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});

    const CreateProduct = e => {
        e.preventDefault();
        const newProduct = {title, price, description};
        axios.post("http://localhost:8000/api/product", newProduct)
            .then(res => {
                console.log(res);
                if(res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    document.location.reload();
                }
            }).catch(err => console.log(err));
    };

    return (
        <div className="row">
            <form className="col-sm-8 offset-sm-2" onSubmit={CreateProduct}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" onChange={e => setTitle(e.target.value)}/>
                    { errors.title ? <p className="text-danger">{errors.title.properties.message}</p> : ""}
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" onChange={e => setDescription(e.target.value)}></textarea>
                    { errors.description ? <p className="text-danger">{errors.description.properties.message}</p> : ""}
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="number" className="form-control" onChange={e => setPrice(e.target.value)}/>
                    { errors.price ? <p className="text-danger">{errors.price.properties.message}</p> : ""}
                </div>
                <input type="submit" className="btn btn-success btn-block" value="Add New Product"/>
            </form>
        </div>
    )
};

export default ProductForm;
