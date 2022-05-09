import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import MainFeatures from '../MainFeatures/MainFeatures';
import Newsletter from '../Newsletter/Newsletter';
import HomeInventoryItem from '../HomeInventoryItem/HomeInventoryItem';

const Home = () => {

    const [items, setItems] = useState([]);

    // maximum six items will be fetch from the server side to display on the home page
    useEffect(() => {
        fetch('http://localhost:5000/inventoryhome')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);


    return (
        <div className='home'>
            {/* banner section  */}
            <Banner></Banner>


            <h1 className='text-center'>Inventories</h1>

            <div className='row row-cols-1 row-cols-md-3 g-4 justify-content-start m-4'>
                {
                    items.map(item => <HomeInventoryItem key={item._id} item={item}></HomeInventoryItem>)
                }
            </div>



            <div className='manage-inventory-btn-section d-flex justify-content-center m-5'>
                <Link to='/inventories'><button className='btn btn-dark text-white'>Manage Inventories</button></Link>
            </div>


            {/* extra section 1: pointing out the main features of the website  */}
            <MainFeatures></MainFeatures>

            {/* extra section 2: subscription to newsletter  */}
            <Newsletter></Newsletter>
        </div>

    );
};

export default Home;