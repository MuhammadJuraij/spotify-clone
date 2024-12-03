import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets';

function Display() {

  const displayref=useRef();
  const location=useLocation();
  const isAlbum=location.pathname.includes('album')
  const albumId=isAlbum?location.pathname.slice(-1):"";
  const bgColor=albumsData[Number(albumId)].bgColor;

  console.log(bgColor)

  useEffect(()=>{
    if(isAlbum){
      displayref.current.style.background=`linear-gradient(${bgColor},#121212)`
    }
    else{
      displayref.current.style.background=`#121212`
    }
  })

  return (
    <div ref={displayref} className='w-[100%] text-white bg-[#121212] pt-4 px-6 overflow-auto lg:w-[75%] lg:m-2 rounded'>
      <Routes>
        <Route path='/' element={<DisplayHome/>}/>
        <Route path='album/:id' element={<DisplayAlbum/>}/>
      </Routes>
      
    </div>
  )
}

export default Display
 