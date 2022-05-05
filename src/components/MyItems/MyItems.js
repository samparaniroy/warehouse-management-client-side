import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MyItems = () => {
    const{productId} = useParams();
    const [product, setProduct] = useState({productId});
    useEffect(() =>{
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);
    return (
        <div>
            <h1>please Order:{product.name}</h1>
        </div>
    );
};

export default MyItems;