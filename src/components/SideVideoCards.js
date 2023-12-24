import React from 'react'
import { useSelector } from 'react-redux';

const SideVideoCards = ({info}) => {
    const {channelTitle, title, thumbnails} = info;
    const isSidebarOpen = useSelector(store =>store.app.isOpenMenu);
    return (
        
        <div className={`flex ${isSidebarOpen ? ' hidden' : 'mt-3 w-80% ml-3'} `}>
            <img className='w-[10rem] h-[6rem]  object-cover  rounded-lg'  src={thumbnails.high.url }/>
            <div className='ml-3'>
            <h1 className=' font-semibold text-[0.9rem]  w-[20rem]'>{title}</h1>
           <h2 className=' text-sm  '>{channelTitle}</h2>
          </div>
          
        </div>
      )
}

export default SideVideoCards