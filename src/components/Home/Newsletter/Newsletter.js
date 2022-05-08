import React from 'react';

const Newsletter = () => {
    return (
        <div>
            <div className='newsletter text-center my-3'>
                <h1>NEWSLETTER</h1>
                <p><small>Get latest updates about our products and best deals. Sign up for newsletters: </small></p>
                <form action="">
                    <input type="email" name='email' placeholder='Email Address' />
                    <input type="button" value="Subscribe" />
                </form>
            </div>
        </div>
    );
};

export default Newsletter;