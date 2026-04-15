import React, { useContext, useState } from 'react';
import { FriendContext } from './Context';
import i2 from '../../assets/call.png'
import i3 from '../../assets/text.png'
import i4 from '../../assets/video.png'

const Timeline = () => {

let {call, text, video}=useContext(FriendContext);
let time = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
});

let [sort, setSort]=useState('All');

    return (
        <div className='pb-10 lg:w-[70%] md:w-[80%] w-[90%] mx-auto'>

<h1 className='font-bold text-3xl pt-5 '>Timeline</h1>

{
    (call.length==0 && text.length==0 && video.length==0) ? <p>Add friends to see in Timeline</p> : 
    <div className='space-y-7'>
        <div className="dropdown dropdown-start mt-3 ">
  <div tabIndex={0} role="button" className="btn m-1">Sort ⬇️</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>setSort('All')}>All</a></li>
    <li><a onClick={()=>setSort('Call')}>Call</a></li>
    <li><a onClick={()=>setSort('Text')}>Text</a></li>
    <li><a onClick={()=>setSort('Video')}>Video</a></li>
  </ul>
</div>

            {
                (sort==='All' || sort==='Call') && call.map(cal=>
                    <div key={cal.id} className='flex items-center gap-7'>
<img src={i2} alt="" />

<div>
    <h1><span className='font-semibold text-[20px] text-[#244D3F]'>Call</span> with {cal.name}</h1>
<p>{time}</p>
</div>
                    </div>
                )
            }

            {
                (sort==='All' || sort==='Text') && text.map(tex=>
                        <div key={tex.id} className='flex items-center gap-7'>
             <img src={i3} alt="" />
             <div>
    <h1><span className='font-semibold text-[20px] text-[#244D3F]'>Text</span> with {tex.name}</h1>
<p>{time}</p>
</div>
                        </div>
                )
            }

            {
                (sort==='All' || sort==='Video') && video.map(vid=>
                    <div key={vid.id} className='flex items-center gap-7'>
                        <img src={i4} alt="" />

                        <div>
    <h1><span className='font-semibold text-[20px] text-[#244D3F]'>Video</span> with {vid.name}</h1>
<p>{time}</p>
</div>
                    </div>
                )
            }
        </div>
}
        </div>
    );
};

export default Timeline;