import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendContext } from './Context';

const Stats = () => {

let {call, text, video}=useContext(FriendContext);


    const data = [
  { name: 'Call', value: call.length, fill: '#0088FE' },
  { name: 'Text', value: text.length, fill: '#00C49F' },
  { name: 'Video', value: video.length, fill: '#FFBB28' },
  
];
    return (
     <div className='lg:w-[80%] w-[90%] mx-auto'>

<div className='mt-10 space-y-5'>
                <h1 className='md:text-4xl text-3xl font-bold'>Friendship Analytics</h1>
             <p className='text-[#244D3F] font-medium text-[18px]'>By Interaction Type</p>
             </div>

        <div className=' flex justify-center items-center py-20 '>
              <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend></Legend>
      <Tooltip></Tooltip>
      
    </PieChart>
        </div>
        </div>
    );
};

export default Stats;