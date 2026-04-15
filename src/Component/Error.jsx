import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='space-y-5 flex flex-col justify-center items-center h-screen animate-pulse'>
            <h1 className='text-4xl font-medium'>You are lost, Traveller 🌿.<br />Go Home......</h1>
       <Link to={'/'}> <button className='btn btn-primary'>Go Home</button></Link>
        </div>
    );
};

export default Error;