import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='space-y-5 text-center py-15 lg:w-[85%] w-[90%] mx-auto'>
            <h1 className='font-semibold lg:text-5xl md:text-3xl text-2xl'>Friends to keep close in your life</h1>
        <p className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.</p>
<div className='flex justify-center'>
    <button className='flex items-center gap-1 bg-[#244D3F] text-white rounded-[10px] px-3 py-2'><FaPlus></FaPlus>Add a Friend</button>
</div>
        </div>
    );
};

export default Banner;