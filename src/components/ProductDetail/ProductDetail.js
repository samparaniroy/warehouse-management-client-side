import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'

const ProductDetail = (props) => {
    const{productId} = useParams();
    const [product, setProduct] = useState({});
    useEffect(() =>{
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);
    return (
        <div className='productDetail-area'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                    <div className="productDetail-item">
                        <img src={product.image} alt="" />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p><small>Price:$ {product.price}</small></p>
                        <p><span>Quantity: {product.quantity}</span></p>
                        <h3>SupplierName: {product.suppliername}</h3>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;