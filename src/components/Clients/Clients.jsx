import React from 'react';
import GeStamp from '../../Images/Logo/gstamp2.png';
import Maxion from '../../Images/Logo/maxion.png';
import Mahindra from '../../Images/Logo/mahindra.png';

export default function Clients() {
    let width = "200px"
    let height = "auto"
  return (
    <div className='w-full'>
        <div className="flex md:flex-nowrap flex-wrap justify-around items-center gap-8">
            <img src={GeStamp} alt=""  width={width} height={height}/>
            <img src={Maxion} alt="" width={width} height={height}/>
            <img src={Mahindra} alt="" width={width} height={height}/>
        </div>
    </div>
  )
}
