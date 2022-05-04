import React from 'react';
import { Link } from 'react-router-dom';
import Products from '../Products/Products';
import './ManageInventory.css'

const ManageInventory = () => {
    const [products, setProducts] = Products([]);
    return (
        <div className='manage-area'>
            <div className="container">
                <div className="row">
                    <div className="add-item-area">
                    <Link to='/addnewitem'><button className='btn btn-primary'>Add New Item</button></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="product-form">
                        <h1>Manage Inventory</h1>
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Product Image</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Product Price</th>
                                <th scope="col">Product Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map(product=>
                                <tr>
                                <td><img src={product.image} alt="" /></td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td><button className='btn btn-danger'>delete</button></td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;