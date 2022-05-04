import React from 'react';
import {signOut} from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Navber.css';
import auth from '../../firebase.init';

const Navber = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () =>{
        signOut(auth)
    }
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
                                    {
                                        user ?
                                        <button className='sign-out' onClick={handleSignOut}>Sign Out</button> 
                                        :
                                        <div className='d-flex'>
                                            <li><Link to='/login'>Login</Link></li>
                                            <li><Link to='/register'>Register</Link></li>
                                        </div>
                                    }
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