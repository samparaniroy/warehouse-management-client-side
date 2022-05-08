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
            <div className="hondra-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hondra-content">
                                <h5>Computer-controlled digital transistorized with electronic advance</h5>
                                <h1>Honda CBR 300R</h1>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                <a href="#">Purchase</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hondra-image">
                                <img src="images/hondra.png" alt="" />
                            </div>
                        </div>
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