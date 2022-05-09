import React from 'react';
import { useSendEmailVerification, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../UserAccount/Loading/Loading';
import './Login.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user, loading, error
    ] = useSignInWithEmailAndPassword(auth);

    const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(
        auth
    );


    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    let errorElem;
    if (error || verificationError) {
        errorElem = <p className='text-danger'>Error: {error?.message}</p>;
    }

    if (loading || sending) {
        return <Loading></Loading>;
    }

    if (user?.auth?.emailVerified) {
        navigate(from, { replace: true });
    } else if (user && !(user?.auth?.emailVerified)) {
        errorElem = <p className='text-danger'>Email not verified. Please verify your email. Or, <button className='btn btn-link' onClick={async () => {
            await sendEmailVerification();
            toast('Sent email');
        }}>Resend verification mail.</button></p>;
    }

    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);
    }

    return (
        <div>
            <div className='form-container my-5'>
                <h1>Login Form</h1>
                <form onSubmit={handleLogin}>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                    <input type="password" className="form-control" id="password" placeholder="Password" />

                    <input type="submit" className="btn btn-dark" value="Register" />
                </form>
                <p>Do not you have an account? <Link to='/register' className='text-success fw-bold'>Please Login</Link></p>
                {errorElem}

                <h6 className='text-muted text-center mt-5 mb-3'>OR</h6>
                <Link to='/'><button className='btn btn-dark w-100'>Google Login</button></Link>
            </div>


        </div>
    );
};

export default Login;