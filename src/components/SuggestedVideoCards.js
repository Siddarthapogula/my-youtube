import React, { useEffect } from 'react'
import verified from "../Photos/verify.png"
import { useDispatch, useSelector } from 'react-redux';
import { ToggleOpenMenu } from './utils/sideSlice';
const SuggestedVideoCards = ({data}) => {
    const {snippet ,  id }= data;
    const {title,description, publishedAt,channelTitle} = snippet
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(ToggleOpenMenu());
    },[])

  return (
    <div className='flex mt-[1rem] '>
        <div className='w-[22rem] h-[12rem]  object-cover  '>
                <img className='w-[22rem] h-full object-cover object-center rounded-xl' src={snippet?.thumbnails?.high?.url}/>
        </div>
        <div className=' w-[60%] ml-2'>
            <h1 className='font-semibold text-lg '>{title}</h1>
            <h1 className=' font-[400] text-[8px] pb-2'>Publishid On {publishedAt.slice(0,10)}</h1>
            <div className='flex'>
            <h1 className=' font-[400] text-xs'>{channelTitle} </h1>
            <img className='w-4 ml-3' src={verified}/>
            </div>
            <h1 className='font-[400] text-xs'>{description}</h1>
            
        </div>
    </div>
  )
}

export default SuggestedVideoCards