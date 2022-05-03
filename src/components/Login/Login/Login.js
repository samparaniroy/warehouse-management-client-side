import React from 'react';
import './Login.css'

const Login = () => {
    
    return (
        <div className='login-form-area'>
            <h1>Please Login</h1>
            <form>
                <input type="text" name="email" placeholder='email' required/>
                <br/>
                <input type="password" name="password" id="" placeholder='password' required/>
                <br/>
                <input className='submit-button' type="submit" value="login" />
            </form>
        </div>
    );
};

export default Login;