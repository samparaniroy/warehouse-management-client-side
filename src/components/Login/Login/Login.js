import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
    }
    const navigateRegister = event =>{
        navigate('/register')
    }
    
    return (
        <div className='login-form-area'>
            <h1>Please Login</h1>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="text" name="email" placeholder='email' required/>
                <br/>
                <input type="password" name="password" id="" placeholder='password' required/>
                <br/>
                <input ref={passwordRef} className='submit-button' type="submit" value="login" />
            </form>
            <p>If You Haven't Account Yet? <Link to='/register' className='' onClick={navigateRegister}>Please Register</Link></p>
        </div>
    );
};

export default Login;