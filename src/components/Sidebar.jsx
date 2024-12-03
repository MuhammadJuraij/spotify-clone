import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from "react-router-dom";


function Sidebar() {
  const navigate=useNavigate()
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-3 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
            <div onClick={()=>navigate('/')} className='flex items-center gap-3 cursor-pointer pl-8'>
                <img className='w-6' src={assets.home_icon} alt="" />
                <p>Home</p>
            </div>
            <div className='flex items-center gap-3 cursor-pointer pl-8' >
                <img className='w-6' src={assets.search_icon} alt="" />
                <p>Search</p>
            </div>
        </div>
        <div className='h-[85%] rounded bg-[#121212]'>
            <div className='p-4 flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <img className='w-8' src={assets.stack_icon} alt="" />
                <p className='font-semibold'>Your Library</p>
              </div>
              <div className='flex gap-3 items-center '>
                <img className='w-5' src={assets.arrow_icon} alt="" />
                <img className='w-5' src={assets.plus_icon} alt="" />
              </div>
            </div>
            <div className='bg-[#242424] p-4 m-2 rounded font-semibold  '>
                <h1>Create your first playlist</h1>
                <p className='font-light'>its easy we will help you</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
            </div>
            <div className='bg-[#242424] p-4 m-2 rounded font-semibold  '>
                <h1>Lets findsome podcast to follow</h1>
                <p className='font-light'>we'll keep you update on new episodes</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse podcast</button>
            </div>
            
        </div>
    
    </div>
  )
}

export default Sidebar