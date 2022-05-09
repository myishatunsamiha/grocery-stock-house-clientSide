import React from 'react';
import banner from '../../../images/banner/banner.jpg';

const Banner = () => {
    return (
        <div className='banner' id='header'>
            <div className='banner-img'>
                <img src={banner} alt="" className='w-100' />
            </div>

            <div className='banner-text'>
                <h2 className='fw-bolder' style={{ color: '#1feb1f', textShadow: '2px 2px gray' }}>STORE and</h2>
                <h1 className='fw-bolder' style={{ color: '#1feb1f', textShadow: '2px 2px gray' }}>MANAGE</h1>
                <h4 className='fw-bolder' style={{ color: '#c8ff00', textShadow: '2px 2px gray' }}>Daily Groceries</h4>
            </div>
        </div>
    );
};

export default Banner;