import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {
    const {_id,name, image, price, description, quantity, suppliername} = product;
    const navigate = useNavigate();
    const navigateToProductDetail = id =>{
        navigate(`/product/${id}`)
    }
    return (
        <div className='col-md-4'>
            <div className="product-item">
                <img src={image} alt="" />
                <h2>{name}</h2>
                <p>{description}</p>
                <p><small>Price:$ {price}</small></p>
                <p><span>Quantity:{quantity}</span></p>
                <h3>SupplierName:{suppliername}</h3>
                <div className='update-button'>
                   <button onClick={() => navigateToProductDetail(_id)}>Update</button>
                </div>
            </div>
        </div>
    );
};

export default Product;