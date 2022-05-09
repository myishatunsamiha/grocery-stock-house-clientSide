import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.from?.pathname || '/';

    if (loading) {
        return <Loading></Loading>;
    }

    let errorElem;
    if (error) {
        errorElem = <p className='text-danger'>Error: {error?.message}</p>;
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <button className='btn btn-dark w-100' onClick={() => signInWithGoogle()}>Google Login</button>
        </div>
    );
};

export default GoogleLogin;