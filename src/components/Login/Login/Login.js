import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    const navigateRegister = event =>{
        navigate('/register')
    }
    const resetPassword = async() =>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
          alert('Sent email');
    }

    if (error) {
        errorElement=<p className='text-danger'>Error: {error.message}</p>
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
            {errorElement}
            <p>If You Haven't Account Yet? <Link to='/register' className='' onClick={navigateRegister}>Please Register</Link></p>
            <p>Forget Password? <Link to='/register' className='' onClick={resetPassword}>Reset Password</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;