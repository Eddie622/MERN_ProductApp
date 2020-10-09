import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from "./components/Display";
import ProductForm from './components/ProductForm';
import EditProduct from './components/EditProduct';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="container">
      <h1 className="d-flex justify-content-center">Product App</h1>
      <Router className="my-5">
        <ProductForm path="/"/>
      </Router>
      <Router className="my-5">
        <Display path="/" />
        <EditProduct path="/edit/:_id" />
      </Router>
    </div>
  );
}

export default App;
