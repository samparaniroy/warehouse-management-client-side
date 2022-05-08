import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetail.css'

const ProductDetail = () => {
    const{productId} = useParams();
    const [product, setProduct] = useState({});
    useEffect(() =>{
        const url = `https://hidden-atoll-75134.herokuapp.com/product/${productId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);
    // const hangleQuantityupdate = event =>{
    //     event.preventDefault();
    //     const quantitys = parseFloat(event.target.quantity.value);
    //     const Quantitys = parseFloat(product.quantity);
    //     const total = Quantitys + quantitys;
    //     const updatequantity= {total}
    //     const url = `https://hidden-atoll-75134.herokuapp.com/product/${productId}`;
    //     fetch(url,{
    //         method: "PUT",
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updatequantity),
    //     })
    //     .then(res => res.json())
    //         .then(data =>{
    //             console.log(data)
    //             event.target.reset()
    //         })
    // }
    return (
        <div className='productDetail-area'>
            <div className="container">
                <div className="row">
                    <div className='text-center py-20 pb-5'>
                        <Link to='/inventory'><button className='btn btn-primary'> Manage Inventories</button></Link>
                    </div>
                    <div className="col-lg-4">
                        <div className="productDetail-item">
                            <img src={product.image} alt="" />
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p><small>Price:$ {product.price}</small></p>
                            <p><span id='quantity'>Quantity: {product.quantity}</span></p>
                            <h3>SupplierName: {product.suppliername}</h3>
                            <div className='button-area'>
                               <button  className='btn btn-primary'>Delivered</button>
                            </div>
                            <div>
                                <form className='pb-5 px-2 pt-5'>
                                    <input className='w-50' type="text" name='quantity' placeholder='Restock the Quantity' />
                                    <input type="submit" value="add" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;