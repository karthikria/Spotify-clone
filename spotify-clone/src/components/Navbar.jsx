import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const nav = useNavigate()
  return (
    <><div className='w-full flex justify-between font-semibold items-center'>
        <div className="flex items-center gap-2">
            <img onClick={()=>nav(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
            <img onClick={()=>nav(+1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
        </div>
        <div className="flex items-center gap-4 ">
            <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-poiter'>Explore premium</p>
           <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Install app</p>
           <p className='bg-orange-600 text-black h-7 w-7 rounded-full flex items-center justify-center cursor-pointer'>N</p>
        </div>
      
    </div>
      <div className="flex items-center gap-2 mt-4">
      <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer '>All</p>
      <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer '>Music</p>
      <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer '>podcasts</p>
  </div>
  </>
  )
}

export default Navbar