import { sendPasswordResetEmail } from 'firebase/auth';
import React from 'react';
import { useCreateUserWithEmailAndPassword, sendEmailVerification } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from './../Loading/Loading';
import { toast } from 'react-toastify';
import './Register.css';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        registerError
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });       // variable to create user using email-password
    // { sendEmailVerification: true } parameter is used for email verification


    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();


    let errorElem;
    if (registerError) {        // if any error, show the error 
        errorElem = <p className='text-danger'>Error: {registerError?.message}</p>;
    }

    if (loading) {          // if the process is loading, show loading spinner
        return <Loading></Loading>;
    }


    if (user) {
        navigate(from, { replace: true });
    }

    const handleRegister = event => {
        event.preventDefault();
        const username = event.target.username.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, username, password);

        createUserWithEmailAndPassword(email, password);
    }


    return (
        <div className='form-container my-5'>
            <h1>Registration Form</h1>
            <form onSubmit={handleRegister}>
                <input type="text" className="form-control" name="username" placeholder="Enter Username" required />
                <input type="email" className="form-control" name="email" placeholder="Enter email" required />
                <input type="password" className="form-control" name="password" placeholder="Password" required />

                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            {errorElem}
            <p>Do you have an account? <Link to='/login' className='text-success fw-bold'>Please Login</Link></p>

            <h6 className='text-muted text-center mt-5 mb-3'>OR</h6>
            <Link to='/'><button className='btn btn-dark w-100'>Google Login</button></Link>
        </div>
    );
};

export default Register;