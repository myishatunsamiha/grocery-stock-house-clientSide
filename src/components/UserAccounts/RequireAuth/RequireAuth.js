import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from './../Loading/Loading';
import protectedlogo from '../../../images/protected.jpg';


const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);  // returns The auth.User if logged in, or null if not 
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (loading) {
        return <Loading></Loading>;
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }


    if (user?.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='d-flex justify-content-center align-items-center my-5'>
            <div className='text-center'>
                <img src={protectedlogo} alt="" style={{ maxWidth: '256px' }} />
                <h3 className='text-danger'>Email is not verified!</h3>
                <h5 className='text-danger'>Please verify your email address to enter this protected route.</h5>
                <button className='btn btn-dark' onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent Email');
                }}>Resend Verification Email</button>
            </div>
        </div>
    }

    return children;
};

export default RequireAuth;