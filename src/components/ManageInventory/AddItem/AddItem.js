import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const AddItem = () => {
    const [user, loading] = useAuthState(auth);

    const handleAddItem = (event) => {
        event.preventDefault();
        const addItem = {
            email: user.email,
            name: event.target.name.value,
            img: event.target.img.value,
            description: event.target.description.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            supplierName: event.target.supplierName.value,
            sold: event.target.sold.value,
            category: event.target.category.value
        }

        fetch('http://localhost:5000/additem', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.insertedId);
                if (data.insertedId) {
                    toast('Item has been added successfully.');
                    event.target.reset();
                }
            })
    }


    return (
        <div>

            <div className='form-container my-5'>
                <h1>Add Items to Inventory</h1>
                <form onSubmit={handleAddItem}>
                    <input type="email" value={user.email} className="form-control" name="email" id="email" placeholder="Enter email" required readOnly />

                    <input type="text" className="form-control" name="name" id="name" placeholder="item name" required />
                    <input type="text" className="form-control" name="img" id="img" placeholder="image url" required />
                    <input type="text" className="form-control" name="description" id="description" placeholder="description" required />
                    <input type="number" className="form-control" name='price' id='price' placeholder="price" required />
                    <input type="number" className="form-control" name="quantity" id="quantity" placeholder="quantity" required />

                    <input type="text" className="form-control" name="supplierName" id="supplierName" placeholder="supplier name" required />
                    <input type="number" className="form-control" name="sold" id="sold" placeholder="sold quantity" required />
                    <input type="text" className="form-control" name="category" id="category" placeholder="food category" required />

                    <input type="submit" className="btn btn-dark" value="Add Item" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;