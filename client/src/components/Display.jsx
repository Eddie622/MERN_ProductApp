import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const Display = props => {

    const [products, setProducts] = useState([]);

    const fetchProducts = () => {
        axios.get("http://localhost:8000/api/product")
            .then(res => {
                console.log(res);
                setProducts(res.data);
            })
            .catch( err => console.log(err));
    }

    useEffect( () => {
        fetchProducts();
    }, []);

    return (
        <div>
            <h1 className="d-flex justify-content-center">All Products</h1>
            {products.map( (prod, i) => 
                <div className="card mb-3" key={prod._id}>
                    <Link className="btn btn-outline-primary" to={`/edit/${prod._id}`}>{prod.title}</Link>
                </div>
            )}
        </div>
    )
};

export default Display;