import React from 'react';
import { IoHomeOutline, IoTimeOutline } from 'react-icons/io5';
import { TfiStatsUp } from 'react-icons/tfi';
import { NavLink } from 'react-router';


const Nav = () => {


const handleActive=({isActive})=>{
return isActive && 'bg-[#244D3F] text-white rounded-[10px]'
}

    return (
        <nav className='flex items-center justify-between lg:w-[85%] w-[90%] mx-auto py-3'>
            <NavLink to={'/'} className='font-bold text-2xl'>Keen<span className='font-semibold text-[#244D3F]'>Keeper</span></NavLink>

            <div className='flex items-center gap-3'>
                <NavLink to={'/'} className={handleActive}><button className='px-3 py-2  font-medium flex items-center gap-1'><IoHomeOutline></IoHomeOutline>Home</button></NavLink>
                <NavLink to={'/timeline'} className={handleActive}><button className='px-3 py-2  font-medium flex items-center gap-1'><IoTimeOutline></IoTimeOutline>Timeline</button></NavLink>
                <NavLink to={'stats'} className={handleActive}><button className='px-3 py-2  font-medium flex items-center gap-1'><TfiStatsUp></TfiStatsUp>Stats</button></NavLink>
            </div>
        </nav>
    );
};

export default Nav;