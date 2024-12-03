import React, { useContext } from 'react'
import Navbar from './Navbar'
import { albumsData, assets, songsData } from '../assets/assets'
import { useParams } from 'react-router-dom'
import { PlayerContext } from '../context/PlayerContext'

const DisplayAlbum = () => {
  const { playwithid } = useContext (PlayerContext)
  const { id } = useParams();
  const albumdata = albumsData[id];
  return (
    <>
      <Navbar />
      <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        <img className='w-48 rounded' src={albumdata.image} alt="" />
        <div className='flex flex-col'>
          <p>Playlist</p>
          <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumdata.name}</h2>
          <h4>{albumdata.desc}</h4>
          <p>
            <img className=' w-5 inline-block' src={assets.spotify_logo} alt="" />
            <b className='mr-2 ml-1'>Spotify</b>
            1,323,154 likes
            <b className='mx-2'>50 songs</b>
            about 2 hr 30 min
          </p>
        </div>
      </div>
      <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7] '>
        <p><b>Titel</b></p>
        <p>Album</p>
        <p className='hidden sm:block'>Date Added</p>
        <img className='m-auto w-4' src={assets.clock_icon} alt="" />
      </div>
      <hr />
      {
        songsData.map((item, index) => (
          <div onClick={() => playwithid(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center  text-white hover:bg-black cursor-pointer'>
            <p>
              <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
              <img className='w-10 inline mr-5' src={item.image} alt="" />
              {item.name}
            </p>
            <p className='text-[15px]'>{albumdata.name}</p>
            <p className='text-[15px] hidden sm:block'>5 days ago</p>
            <p className='text-[15px] text-center'>{item.duration}</p>
          </div>
        ))
      }
    </>
  )
}

export default DisplayAlbum