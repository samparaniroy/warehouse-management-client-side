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
            <div className="bikes-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bikes-title">
                                <h1>Fetured Bikes 2021</h1>
                                <p>Best bike collection</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bikes-image">
                                <img src="images/hondra1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bikes-image">
                                <img src="images/hondra2.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bikes-image">
                                <img src="images/hondra3.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;