import React from 'react';
import Products from '../Products/Products';

const ManageItem = () => {
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
        <div className='w-50 mx-auto'>
            <h1>Mangae Item</h1>
            {
                products.map(product => <div key={product._id}>
                    <h5>{product.name}<button className='btn btn-danger' onClick={() => handleDelete(product._id)}>Delete</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageItem;