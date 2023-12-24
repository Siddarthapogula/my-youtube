import React from 'react'
import { useSelector } from 'react-redux';

const VideoButtons = () => {
  

  const isSidebarOpen = useSelector(store => store.app.isOpenMenu);
  return (
    <div className={` flex ${isSidebarOpen ? 'ml-3' : 'ml-8'} mb-4`}>
      <button className='py-1 px-2 mr-2 bg-gray-200  rounded-lg'>All</button>
      <button className='py-1 px-2 mr-2 bg-gray-200  rounded-lg'>Music</button>
      <button className='py-1 px-2 mr-2 bg-gray-200  rounded-lg'>Mixed</button>
      <button className='py-1 px-2 mr-2 bg-gray-200  rounded-lg'>Tamil Cinema</button>
      <button className='py-1 px-2 mr-2 bg-gray-200  rounded-lg'>Cricket</button>
      <button className='py-1 px-2 mr-2 bg-gray-200  rounded-lg'>Kapil Sharma</button>
      <button className='py-1 px-2 mr-2 bg-gray-200  rounded-lg'>Cricket</button>
      <button className='py-1 px-2 mr-2 bg-gray-200  rounded-lg'>AI</button>
      <button className='py-1 px-2 mr-2 bg-gray-200  rounded-lg'>Trailers</button>
      <button className='py-1 px-2 mr-2 bg-gray-200  rounded-lg'>Gadgets</button>
      <button className='py-1 px-2 mr-2 bg-gray-200  rounded-lg'>Watched</button>
      <button className='py-1 px-2 mr-2 bg-gray-200  rounded-lg'>New to you</button>
    </div>
  )
}

export default VideoButtons