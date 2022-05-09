import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeInventoryItem = ({ item }) => {
    const { _id, name, img, description, price, quantity, supplierName, sold } = item;

    return (

        <div className="col" id='inventories'>
            <div className="card">
                <img src={img} className="card-img-top" alt="..." style={{ maxWidth: '100%', maxHeight: '100%' }} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Price: {price} Tk</li>
                    <li className="list-group-item">Qnt: {quantity} unit</li>
                    <li className="list-group-item">Supplier: {supplierName}</li>
                    <li className="list-group-item">Supplier: {sold}</li>
                </ul>
                <div className="card-body">
                    <Link to={'/inventory/${_id}'}><button className='btn btn-dark text-white'>Stock Update</button></Link>
                </div>
            </div>
        </div>

    );
};

export default HomeInventoryItem;