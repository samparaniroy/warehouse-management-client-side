import React from 'react';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import Products from '../Products/Products';
import './Home.css'

const Home = () => {
    const [products, setProducts] = Products([])
    return (
        <div>
            <Banner></Banner>
            <div className="products-area">
            <div className="container">
                <div className="row">
                    <div className="products-title">
                        <h1>Our Products</h1>
                    </div>
                        {
                            products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                        }
                </div>
            </div>
        </div>
        </div>
    );
};

export default Home;