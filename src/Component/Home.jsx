import React, { Suspense } from 'react';
import Banner from './Banner';
import Friends from './Friends';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<div className='flex justify-center items-center h-screen'><span className="loading loading-spinner text-success loading-xl"></span></div>}>
                <Friends></Friends>
            </Suspense>
        </div>
    );
};

export default Home;