import React from 'react';
import Nav from './Nav';
import { Outlet } from 'react-router';
import Footer from './Footer';

const Root = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Nav></Nav>
            <main className='flex-grow'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;