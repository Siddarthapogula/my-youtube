import React from 'react'
import { API_KEY } from './utils/constants';
import { useSelector } from 'react-redux';



const VideoCard = ({info}) => {
  
  const isSidebarOpen = useSelector(store => store.app.isOpenMenu);
  const {snippet, statistics} = info;
  
  return (
    <div className=' mt-3  '>
        <img className={`flex ${isSidebarOpen ? 'w-[20rem] h-56  object-cover  rounded-lg' : 'w-[24rem] h-56  object-cover  rounded-lg'}`} src={snippet?.thumbnails?.high?.url }/>
        <div>
        <h1 className=' font-semibold  w-[20rem]'>{snippet?.title}</h1>
       <h2 className=' text-sm  '>{snippet.channelTitle}</h2>
      </div>
      
    </div>
  )
}

export default VideoCard