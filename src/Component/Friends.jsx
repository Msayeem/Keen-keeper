import React, { Suspense, use } from 'react';
import AllFriends from './AllFriends';

const fetch1=fetch(`${import.meta.env.BASE_URL}data.json`)
.then(x=>x.json())

const Friends = () => {
    
    const friends=use(fetch1);
    return (
    <div className='lg:w-[60%] md:w-[70%] w-[80%] mx-auto  '>

<div className='grid md:grid-cols-4 gap-y-5 grid-cols-2 justify-between text-center py-5 '>

    <div className='space-y-2'>
        <h1 className='font-bold text-3xl text-[#244D3F]'>10</h1>
        <p className='text-[#64748B]'>Total Friends</p>
    </div>
    <div className='space-y-2'>
        <h1 className='font-bold text-3xl text-[#244D3F]'>3</h1>
        <p className='text-[#64748B]'>On Track</p>
    </div>
    <div className='space-y-2'>
        <h1 className='font-bold text-3xl text-[#244D3F]'>6</h1>
        <p className='text-[#64748B]'>Need Attention</p>
    </div>
    <div className='space-y-2'>
        <h1 className='font-bold text-3xl text-[#244D3F]'>12</h1>
        <p className='text-[#64748B]'>Interactions This Month</p>
    </div>

</div>

<h1 className='text-[20px] font-medium pt-10'>Your Friends</h1>

           
             <div className='py-5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-y-10'>
            {
                friends.map(friend=>
                   
                     <AllFriends key={friend.id} friend={friend}></AllFriends>
                   
                )
            }
        </div>

    </div>
    );
};

export default Friends;