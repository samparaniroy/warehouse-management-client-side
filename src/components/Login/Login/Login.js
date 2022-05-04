import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
      ] = useSignInWithEmailAndPassword(auth); 

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    const navigateRegister = event =>{
        navigate('/register')
    }
    if(user){
        navigate(from, { replace: true });
    }
    
    return (
        <div className='login-form-area'>
            <h1>Please Login</h1>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="text" name="email" placeholder='email' required/>
                <br/>
                <input ref={passwordRef} type="password" name="password" id="" placeholder='password' required/>
                <br/>
                <input className='submit-button' type="submit" value="login" />
            </form>
            <p>If You Haven't Account Yet? <Link to='/register' className='' onClick={navigateRegister}>Please Register</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;