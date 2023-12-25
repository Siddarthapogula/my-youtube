import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { API_KEY, YT_VIDEOS_API } from './utils/constants';
import SuggestedVideoCards from './SuggestedVideoCards';

const SuggestedVideos = () => {
     const {query} = useParams();
     const [suggestedVideos, setSuggestedVideos] = useState(null);
        const getSuggestedVideos = async ()=>{
            const data = await fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q='+query+'&key='+API_KEY);
            const response = await data.json();
            setSuggestedVideos(response?.items)
        }
     useEffect(()=>{
        getSuggestedVideos();
     },[query])
     
  return (
    <div className='w-[93%]'>
        {suggestedVideos && suggestedVideos.map((video, index)=><Link to={"/watch?v="+video?.id?.videoId} ><SuggestedVideoCards data = {video}/></Link>)}
    </div>
  )
}

export default SuggestedVideos