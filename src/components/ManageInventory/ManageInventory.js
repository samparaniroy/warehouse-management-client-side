import React from 'react';
import { Link } from 'react-router-dom';
import Products from '../Products/Products';
import './ManageInventory.css'

const ManageInventory = () => {
    const [products, setProducts] = Products([]);
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure');
        if(proceed){
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining)
            })
        }
    }
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
                        <table className="table">
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
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td><button className='btn btn-danger' onClick={() => handleDelete(product._id)}>delete</button></td>
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