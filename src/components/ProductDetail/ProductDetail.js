import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetail.css'

const ProductDetail = () => {
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
                            <button>Delivered</button>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div className='text-center py-20'>
                        <Link to='/inventory'><button className='btn btn-primary w-50'> Manage Inventories</button></Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;