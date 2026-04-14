import React from 'react';
import { Link } from 'react-router';

const AllFriends = ({friend}) => {
    return (
        <Link to={`/friend-details/${friend.id}`} className='hover:bg-green-100 rounded-3xl active:opacity-70 transition-[0.30s]'>
            <div className='text-center space-y-1.5  hover:scale-90 transition-[0.40s]'>
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
        </Link>
    );
};

export default AllFriends;