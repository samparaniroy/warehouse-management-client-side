import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className="products-area">
            <div className="container">
                <div className="row">
                    <div className="products-title">
                        <h1>Our Products</h1>
                    </div>
                        {
                            products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                        }
                </div>
            </div>
        </div>
    );
};

export default Products;
