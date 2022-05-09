import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './InventoryItem.css';

const InventoryItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItem(data)
            })
    }, [id]);



    const handleUpdateItem = (event) => {
        event.preventDefault();

        let updatedQty;
        updatedQty = parseInt(item.quantity) + parseInt(event.target.increaseQuantity.value);
        console.log(updatedQty);


        let updatedItem = {
            email: item.email,
            name: item.name,
            img: item.img,
            description: item.description,
            price: item.price,
            quantity: updatedQty,
            supplierName: item.supplierName,
            sold: item.sold,
            category: item.category
        }

        fetch(`http://localhost:5000/inventory/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                console.log(data.modifiedCount);
                if (data.modifiedCount === 1) {
                    toast('Item has been added successfully.');
                    setItem(updatedItem);
                    event.target.reset();
                }
            })
    }

    const handleDeliverItem = () => {
        const proceed = window.confirm('Are you sure you want to deliver one unit?');

        if (proceed) {
            let updatedQty, updatedSold;
            if (parseInt(item.quantity) > 0) {
                updatedQty = parseInt(item.quantity) - 1;
                console.log(updatedQty);

                updatedSold = parseInt(item.sold) + 1;
                console.log(updatedSold);
            }


            let updatedItem = {
                email: item.email,
                name: item.name,
                img: item.img,
                description: item.description,
                price: item.price,
                quantity: updatedQty,
                supplierName: item.supplierName,
                sold: updatedSold,
                category: item.category
            }

            fetch(`http://localhost:5000/inventory/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    console.log(data.modifiedCount);
                    if (data.modifiedCount === 1) {
                        toast('Item deducted successfully.');
                        setItem(updatedItem);
                    }
                })
        }

    }

    return (
        <div>
            <h1>Inventory Item details</h1>
            <div className='inventory-item-card-container d-flex justify-content-center'>
                <div className="card">
                    <img src={item?.img} className="card-img-top" alt="..." style={{ maxWidth: '80%', maxHeight: '80%', margin: '0 auto' }} />
                    <div className="card-body">
                        <h5 className="card-title">{item?._id}</h5>
                        <h5 className="card-title">Name: {item?.name}</h5>
                        <p className="card-text">Description: {item?.description}.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Price: {item?.price} Tk</li>
                        <li className="list-group-item">Qnt: {item?.quantity} unit</li>
                        <li className="list-group-item">Supplier: {item?.supplierName}</li>
                        <li className="list-group-item">Sold: {item?.sold}</li>
                        <li className="list-group-item">Category: {item?.category}</li>
                    </ul>
                    <div className="card-body d-flex justify-content-between">

                        <div>
                            <button className='btn btn-danger' onClick={handleDeliverItem}>Delivered</button>
                        </div>
                        <div>

                            <form onSubmit={handleUpdateItem}>
                                <input type="number" name="increaseQuantity" id="increaseQuantity" placeholder='quantity' />
                                <button>Increase Quantity</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className='manage-inventory-btn-section d-flex justify-content-center m-5'>
                <Link to='/inventories'><button className='btn btn-dark text-white'>Manage Inventories</button></Link>
            </div>
        </div>
    );
};
export default InventoryItem;