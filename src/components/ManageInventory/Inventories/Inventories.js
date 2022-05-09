import { PlusCircleIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import empty from '../../../images/empty.jpg';
import Loading from '../../UserAccounts/Loading/Loading';

const Inventories = () => {
    const [items, setItems] = useState([]);

    // bringing all items from server
    useEffect(() => {
        fetch('http://localhost:5000/allinventory')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);


    // deleting specific item from server
    const handleDelete = (id) => {
        const confirmation = window.confirm('Are you sure you want to delete?');


        if (confirmation) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log('deleted data', data);
                    if (data.deletedCount === 1) {
                        const remaining = items.filter(item => id !== item._id);
                        setItems(remaining);
                    }
                })
        }
    }

    return (
        <div className='container'>
            <h1>Manage Inventories</h1>

            <div className='my-3 text-center'>
                <Link to='/additem'><button className='btn btn-dark text-white'>Add New Item <PlusCircleIcon style={{ height: '16px' }}></PlusCircleIcon></button></Link>
            </div>


            {
                items?.length > 0 ?
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map(item => < tr key={item._id}>
                                    <th scope="row"><img src={item.img} style={{ maxHeight: '40px', maxWidth: '40px' }} alt='..' /></th>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td><button className='btn btn-dark text-white' onClick={() => handleDelete(item._id)}>Delete</button></td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                    : <div className='text-center'><img src={empty} style={{ maxWidth: '400px' }} alt='..' /><h2 className='text-center my-5 text-danger'>Empty Grocery Store</h2> </div>
            }
        </div>
    );
};

export default Inventories;