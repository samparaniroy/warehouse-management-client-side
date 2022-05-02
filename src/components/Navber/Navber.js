import React from 'react';
import { Link } from 'react-router-dom';
import './Navber.css';

const Navber = () => {
    return (
        <div>
            <div className="header-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="logo-area">
                                <Link to='/'>Biker Place</Link>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="menuber-area">
                                <ul>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/blogs'>Blogs</Link></li>
                                    <li><Link to='/login'>Login</Link></li>
                                    <li><Link to='/register'>Register</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;