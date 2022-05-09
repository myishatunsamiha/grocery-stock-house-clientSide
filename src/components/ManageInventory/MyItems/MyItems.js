import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyItems = () => {

    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);

    // bringing all items from server
    useEffect(() => {
        fetch(`http://localhost:5000/myitems?email=${user.email}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [user]);


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
            <h1>My Items</h1>

            {
                items?.length ?
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
                    </table> : <h3>No Data Found for this user</h3>

            }
        </div>
    );

};

export default MyItems;