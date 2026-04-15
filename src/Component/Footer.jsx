import React from 'react';
import i7 from '../../assets/instagram.png'
import i8 from '../../assets/facebook.png'
import i9 from '../../assets/twitter.png'

const Footer = () => {
    return (
       <footer className=' mt-15 py-10 bg-[#244D3F]'>

<div className='lg:w-[70%] md:w-[80%] w-[90%] mx-auto '>



<div className='text-center space-y-5'>
    <h1 className='text-4xl text-white font-medium'><span className='font-extrabold'>Keen</span>Keeper</h1>
<p className='text-white'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

<div className='space-y-3'>
    <h1 className='text-white'>Social Links</h1>
    <div className='flex items-center justify-center gap-3'>
<img src={i7} alt="" />
<img src={i8} alt="" />
<img src={i9} alt="" />
    </div>
</div>
</div>

<hr className='my-5 border-green-800' />


<div className='flex justify-between md:flex-row flex-col gap-5 items-center'>
    <p className='text-white'>
         © 2026 KeenKeeper. All rights reserved.
    </p>

    <div className='flex items-center gap-5'>
       <a className='text-white hover:underline' href="#">Privacy Policy</a>
       <a className='text-white hover:underline' href="#">Terms of Service</a>
       <a className='text-white hover:underline' href="#">Cookies</a>
    </div>
</div>


</div>

       </footer>
    );
};

export default Footer;