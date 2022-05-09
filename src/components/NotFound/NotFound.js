import React from 'react';
import notfound from '../../images/404.png';

const NotFound = () => {
    return (
        <div className='text-center'>
            <img src={notfound} alt="" style={{ maxWidth: '500px' }} />
            <h2 className='text-danger'>Page you are searching for is not found.</h2>
            <h5>Redirect yourself using the navigation bar.</h5>
        </div>
    );
};

export default NotFound;