import React, { useEffect, useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from './../Loading/Loading';
import GoogleLogin from './../GoogleLogin/GoogleLogin';
import './Login.css';

const Login = () => {
    // for login
    const [
        signInWithEmailAndPassword,
        user, loading, error
    ] = useSignInWithEmailAndPassword(auth);


    // for forget email
    const [sendPasswordResetEmail, forgetSending] = useSendPasswordResetEmail(
        auth
    );
    const emailRef = useRef();

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    let errorElem;
    if (error) {
        errorElem = <p className='text-danger'>Error: {error?.message}</p>;
    }


    if (loading || forgetSending) {
        return <Loading></Loading>;
    }


    if (user) {
        navigate(from, { replace: true });
    }


    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('Please enter your email address.');
        }
    }

    return (
        <div>
            <div className='form-container my-5'>
                <h1>Login Form</h1>
                <form onSubmit={handleLogin}>
                    <input type="email" ref={emailRef} className="form-control" id="email" placeholder="Enter email" required />
                    <input type="password" className="form-control" id="password" placeholder="Password" required />

                    <input type="submit" className="btn btn-dark" value="Register" />
                </form>
                <p>Do not you have an account? <Link to='/register' className='text-success fw-bold'>Please Login</Link></p>
                {errorElem}
                <p>Forgot Password? <button className='btn btn-link text-success fw-bold text-decoration-none' onClick={resetPassword}>Reset Password</button></p>

                <h6 className='text-muted text-center mt-5 mb-3'>OR</h6>
                <GoogleLogin></GoogleLogin>
            </div>


        </div>
    );
};

export default Login;