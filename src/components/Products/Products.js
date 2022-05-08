import  { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('https://hidden-atoll-75134.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return[products, setProducts];
};

export default Products;
