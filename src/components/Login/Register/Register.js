import React, { useRef } from 'react';
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const navigateLogin = event =>{
        navigate('/login')
    }
    if(user){
        navigate('/')
    }
    const handleSubmit = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='register-area'>
            <h1>Please Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder='name'/>
                <br/>
                <input type="email" name="email" id="" placeholder='email' required/>
                <br/>
                <input type="password" name="password" id="" placeholder='password' required/>
                <br/>
                <input className='submit-button' type="submit" value="register" />
            </form>
            <p>Already have an Account? <Link to='/login' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;