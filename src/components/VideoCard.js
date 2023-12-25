import React from 'react'
import { API_KEY } from './utils/constants';
import { useSelector } from 'react-redux';
import verified from "../Photos/verify.png"


const VideoCard = ({info}) => {
  
  const isSidebarOpen = useSelector(store => store.app.isOpenMenu);
  const {snippet, statistics} = info;
  
  return (
    <div className=' mt-3  '>
        <img className={`flex ${isSidebarOpen ? 'w-[20rem] h-56  object-cover  rounded-lg' : 'w-[24rem] h-56  object-cover  rounded-lg'}`} src={snippet?.thumbnails?.high?.url }/>
        <div>
        <h1 className=' font-semibold  w-[20rem]'>{snippet?.title}</h1>
        <div className='flex'>
       <h2 className=' text-sm  '>{snippet.channelTitle}</h2> <img className='w-4 h-4 translate-y-1 opacity-40  ml-3' src={verified}/></div>
       <div className='flex'>
       <h1 className='text-sm '>{statistics?.viewCount} views</h1>
       <h2 className=' text-sm ml-3  '> published on {(snippet?.publishedAt).slice(0,10)} </h2>
       </div>
      </div>
      
    </div>
  )
}

export default VideoCard