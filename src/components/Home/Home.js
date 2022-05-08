import React from 'react';
import Header from '../Shared/Header/Header';
import banner from '../../images/banner/banner.jpg';
import './Home.css';
import { EyeIcon, UserAddIcon, PlusCircleIcon, DocumentAddIcon, XCircleIcon, ArrowCircleUpIcon, BookOpenIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* banner section  */}
            <div className='banner'>
                <div className='banner-img'>
                    <img src={banner} alt="" className='w-100' />
                </div>

                <div className='banner-text'>
                    <h2 className='fw-bolder fs-2' style={{ color: '#1feb1f', textShadow: '2px 2px gray' }}>STORE and</h2>
                    <h1 className='fw-bolder fs-1' style={{ color: '#1feb1f', textShadow: '2px 2px gray' }}>MANAGE</h1>
                    <h4 className='fw-bolder' style={{ color: '#c8ff00', textShadow: '2px 2px gray' }}>Daily Groceries</h4>
                </div>
            </div>

            <div className='inventories'>

            </div>

            <div className='manage-inventories'>
                <Link><button>Manage Inventories</button></Link>
            </div>


            {/* extra section 1: pointing out the main features of the website  */}
            <h1 className='text-center'>Main Features</h1>
            <div className='features bg-dark text-light text-center py-4'>

                <ul style={{ listStyle: 'none' }}>
                    <li><small>Register and Login</small> <UserAddIcon style={{ width: '16px' }} className='hero' /></li>
                    <li><small>Create your inventory</small> <DocumentAddIcon style={{ width: '16px' }} className='hero' /></li>
                    <li><small>Add items to the inventory</small> <PlusCircleIcon style={{ width: '16px' }} className='hero' /></li>
                    <li><small>See the inventory</small> <EyeIcon style={{ width: '16px' }} className='hero' /></li>
                    <li><small>Delete items from the inventory</small> <XCircleIcon style={{ width: '16px' }} className='hero' /></li>
                    <li><small>Restock items to the inventory</small> <ArrowCircleUpIcon style={{ width: '16px' }} className='hero' /></li>
                    <li><small>Read blogs</small> <BookOpenIcon style={{ width: '16px' }} className='hero' /></li>
                </ul>

            </div>

            {/* extra section 2: subscription to newsletter  */}
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

export default Home;