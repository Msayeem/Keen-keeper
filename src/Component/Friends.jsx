import React, { use } from 'react';
import AllFriends from './AllFriends';

const fetch1=fetch(`${import.meta.env.BASE_URL}data.json`)
.then(x=>x.json())

const Friends = () => {
    const friends=use(fetch1);
    return (
    <div className='lg:w-[60%] md:w-[70%] w-[80%] mx-auto  '>
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