import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
        <div className='flex flex-col gap-4 pt-6  pl-[20%] text-[15px]'>
            <NavLink className='flex items-center gap-3 border-gray-300 border-y border-l px-3 py-2 rounded' to="/add">
                <img className='w-5 h-5' src={assets.add_icon} alt="" />
                <p className='hidden md:block'>Add Items</p>
            </NavLink>
            <NavLink className='flex items-center gap-3 border-gray-300 border-y border-l px-3 py-2 rounded' to="/list">
                <img className='w-5 h-5' src={assets.order_icon} alt="" />
                <p className='hidden md:block'>List Items</p>
            </NavLink>
            <NavLink className='flex items-center gap-3 border-gray-300 border-y border-l px-3 py-2 rounded' to="/orders">
                <img className='w-5 h-5' src={assets.order_icon} alt="" />
                <p className='hidden md:block'>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar