import React from 'react';

const AllFriends = ({friend}) => {
    return (
        <div className='text-center space-y-1.5'>
            <img className='rounded-full mx-auto' src={friend.picture} alt="" />
            <h3 className='font-semibold'>{friend.name}</h3>
            <p>{friend.days_since_contact}d ago</p>

        <span className='flex justify-center gap-2'>
            {friend.tags.map((tag, index)=>
                <span className='badge badge-accent' key={index}>
                    {tag}
                    </span>
            )}
        </span>

        <span className={`${friend.status=='Almost Due' ? 'badge badge-warning': ''} ${friend.status=='Overdue' ? 'badge badge-error text-white' : ''} ${friend.status=='On Track' ? 'badge badge-success':''} `}>{friend.status}</span>
        </div>
    );
};

export default AllFriends;