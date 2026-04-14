import React, { useContext } from 'react';
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

    return (
        <div className='lg:w-[70%] md:w-[80%] w-[90%] mx-auto space-y-7'>

<h1 className='font-bold text-3xl pt-5 '>Timeline</h1>

<div className="dropdown dropdown-start">
  <div tabIndex={0} role="button" className="btn m-1">Click ⬇️</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>

            {
                call.map(cal=>
                    <div className='flex items-center gap-7'>
<img src={i2} alt="" />

<div>
    <h1><span className='font-semibold text-[20px] text-[#244D3F]'>Meetup</span> with {cal.name}</h1>
<p>{time}</p>
</div>
                    </div>
                )
            }

            {
                text.map(tex=>
                        <div className='flex items-center gap-7'>
             <img src={i3} alt="" />
             <div>
    <h1><span className='font-semibold text-[20px] text-[#244D3F]'>Text</span> with {tex.name}</h1>
<p>{time}</p>
</div>
                        </div>
                )
            }

            {
                video.map(vid=>
                    <div className='flex items-center gap-7'>
                        <img src={i4} alt="" />

                        <div>
    <h1><span className='font-semibold text-[20px] text-[#244D3F]'>Video</span> with {vid.name}</h1>
<p>{time}</p>
</div>
                    </div>
                )
            }
        </div>
    );
};

export default Timeline;