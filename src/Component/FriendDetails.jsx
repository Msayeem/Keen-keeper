import React, { useContext } from 'react';
import { FriendContext } from './Context';
import { useLoaderData, useParams } from 'react-router';
import { RiNotificationSnoozeLine } from 'react-icons/ri';
import { IoArchiveOutline, IoVideocamOutline } from 'react-icons/io5';
import { MdDeleteOutline, MdOutlineMessage } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';

const FriendDetails = () => {
    let {call, setCall, text, setText, video, setVideo}=useContext(FriendContext);
     const {id}=useParams();
    const friends=useLoaderData();
   

    let expectedFriends=friends.find(friend=> friend.id==id);
   
    return (
        <div className='pt-15 lg:w-[70%] md:w-[85%] w-[90%] mx-auto grid grid-cols-4 '>
            
<div className='text-center col-span-1 space-y-2.5'>
  <img className='mx-auto rounded-full' src={expectedFriends.picture} alt="" />
  <span className={`${expectedFriends.status=='Almost Due' ? 'badge badge-warning': ''} ${expectedFriends.status=='Overdue' ? 'badge badge-error text-white' : ''} ${expectedFriends.status=='On Track' ? 'badge badge-success':''} `}>{expectedFriends.status}</span>
  <span className='flex justify-center gap-2'>
            {expectedFriends.tags.map((tag, index)=>
                <span className='badge badge-accent' key={index}>
                    {tag}
                    </span>
            )}
        </span>
        <p className='text-[#64748B]'><em>"{expectedFriends.bio}"</em></p>
<p className='text-[#64748B] text-[16px]'>Preferred: email</p>

<div className='space-y-3 py-6 flex flex-col items-center'>
    <button className='flex items-center gap-1 font-medium'><RiNotificationSnoozeLine></RiNotificationSnoozeLine> Snooze 2 weeks</button>
<button className='flex items-center gap-1 font-medium'><IoArchiveOutline></IoArchiveOutline>  Archive</button>
    <button className='flex items-center gap-1 text-red-700 font-medium'><MdDeleteOutline></MdDeleteOutline> Delete</button>
</div>
</div>

<div className='col-span-3 w-[75%] mx-auto'>

    <div className='flex justify-between gap-5 mb-5'>
        <div className='text-center'>
            <h1 className='text-[#244D3F] font-semibold text-2xl'>{expectedFriends.days_since_contact}</h1>
            <p className='text-[#64748B]'>Days Since Contact</p>
        </div>
        <div className='text-center'>
            <h1 className='text-[#244D3F] font-semibold text-2xl'>{expectedFriends.goal}</h1>
            <p className='text-[#64748B]'>Goal (Days)</p>
        </div>
        <div className='text-center'>
            <h1 className='text-[#244D3F] font-semibold text-2xl'>{expectedFriends.next_due_date}</h1>
            <p className='text-[#64748B]'>Next Due</p>
        </div>
    </div>

    <div className='flex items-center justify-between py-5'>
        <h1 className='text-[#244D3F] font-semibold'>Relationship Goal</h1>
        <p className='text-[#244D3F] font-semibold'>Edit</p>
    </div>

    <h1 className='pb-10'>Connect every <b>{expectedFriends.goal} Days</b></h1>

<h1 className='text-[#244D3F] font-semibold'>Quick Check-In</h1>

<div className='flex justify-around py-8'>
    <button className='flex flex-col items-center gap-1 text-[18px] font-semibold'>
        <FiPhoneCall></FiPhoneCall>
        Call
    </button>
    <button className='flex flex-col items-center gap-1 text-[18px] font-semibold'>

<MdOutlineMessage></MdOutlineMessage>
        Text
    </button>
    <button className='flex flex-col items-center gap-1 text-[18px] font-semibold'>
        <IoVideocamOutline></IoVideocamOutline>
        Video
    </button>
</div>

</div>

        </div>
    );
};

export default FriendDetails;