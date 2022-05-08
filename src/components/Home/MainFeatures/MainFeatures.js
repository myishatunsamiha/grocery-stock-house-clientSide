import React from 'react';
import { EyeIcon, UserAddIcon, PlusCircleIcon, DocumentAddIcon, XCircleIcon, ArrowCircleUpIcon, BookOpenIcon } from '@heroicons/react/solid';

const MainFeatures = () => {
    return (
        <>
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
        </>
    );
};

export default MainFeatures;