import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    const {name, image, price, description, quantity, suppliername} = props.product;
    return (
        <div className='col-md-4'>
            <div className="product-item">
                <img src={image} alt="" />
                <h2>{name}</h2>
                <p>{description}</p>
                <p><small>Price:$ {price}</small></p>
                <p><span>Quantity:{quantity}</span></p>
                <h3>suppliername:{suppliername}</h3>
                <div className='update-button'>
                    <Link to='inventory'><button>Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;