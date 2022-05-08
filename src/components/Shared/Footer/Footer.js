import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-dark text-light pt-5 pb-3'>
            <div className='d-flex'>
                <div className='w-75 p-4'>
                    <h5>Contact Us</h5>
                    <small><b>ADDRESS:</b> Mohammadia Housing Society, Mohammadpur, Dhaka</small><br />
                    <small><b>PHONE:</b> +880 1674 888 199</small><br />
                    <small><b>EMAIL:</b> grocery.stockhouse@gmail.com</small><br />
                    <small><b>WORKING DAYS/HOURS:</b> 7 days a week from 9:00am to 9:00pm</small><br />
                </div>

                <div className='p-4'>
                    <p>Links</p>
                    <small><Link to='/' className='text-decoration-none text-success'>Home</Link></small><br />
                </div>
            </div>
            <p className='text-center'><small>copyright &copy; {new Date().getFullYear()} </small></p>
        </footer>
    );
};

export default Footer;