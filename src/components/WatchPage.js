import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CloseSideBar } from './utils/sideSlice';
import { Link, useSearchParams } from 'react-router-dom';
import { API_KEY, YT_VIDEOS_API } from './utils/constants';
import { addCommentChannelName, addMovies } from './utils/movieSlice';
import like from '../Photos/like.png'
import { indianNames } from './utils/constants';
import SideVideoCards from './SideVideoCards';

const WatchPage = () => {
  const [params] = useSearchParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(CloseSideBar());
    },[])

    const [videos, setVideos] = useState([]);
    const [currentVideo , setCurrentVideo] =  useState(null);
    const [currentChannel , setCurrentChannel] =  useState(null);
    const [subscribe, setSubscribe] = useState(true);
    const [comments, setComments] = useState(null);
    const [commentChannel, setCommentChannel] = useState(null);
    const getVideos = async () => {
      try {
        const response = await fetch(YT_VIDEOS_API);
        const data = await response.json();
        
        setVideos(data);
      } catch (error) {
        // console.error('Error fetching videos:', error);
      }
    };
  
    useEffect(() => {
      getVideos();
    }, [params]);
  
    useEffect(() => {
    }, [videos]);
    {videos && dispatch(addMovies(videos.items))}

    const videos1 = useSelector(store=> store.watch.movies);
    const getCurrentVideo = async()=>{
        const data = await fetch("https://www.googleapis.com/youtube/v3/videos?id="+params.get("v")+"&key="+API_KEY+"&part=snippet,statistics")
        const response = await data.json();
        setCurrentVideo(response?.items[0]);

    }
    const channelID = currentVideo?.snippet?.channelId;
    const getCurrentChannel = async()=>{
        const data2 = await fetch("https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id="+currentVideo?.snippet?.channelId+"&key="+API_KEY)
        const response2 = await data2.json();
       {currentVideo && setCurrentChannel(response2?.items[0]);} 
    }

    const getComments = async()=>{
      const data = await fetch("https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId="+params.get("v")+"&maxResults=50&key="+API_KEY);
      const response = await data.json();
      setComments(response?.items);
      const commentItems = response?.items;
      {
        commentItems && setComments (commentItems.map((comment)=>
      ({
        channelId: comment?.snippet?.channelId,
        textDisplay : comment?.snippet?.topLevelComment?.snippet?.textDisplay,
      })
      ));
      }
      
    }

    useEffect(()=>{
        getCurrentVideo();
    },[params])
    useEffect(()=>{
      getCurrentChannel();
      getComments();
  },[currentVideo,params])


  return (
    <div className=' flex'>
      <div className=' ml-16 mt-6 w-[55%]'>
      <iframe className='  rounded-xl ' width="680" height="395" 
      src={"https://www.youtube.com/embed/"+params.get("v")+"?&autoplay=1"}
       title="YouTube video player" frameBorder="0" 
       allow="accelerometer; autoplay; clipboard-write;
        encrypted-media; gyroscope; picture-in-picture;
         web-share" allowFullScreen></iframe>
         
         
        <h1 className='mt-2 font-[500] text-xl'>{currentVideo?.snippet?.localized?.title}</h1>
        <h1 className=' text-xs font-semibold '>{currentVideo?.statistics?.viewCount} views</h1>
              <div className='flex py-3'>
                  <img className='w-10 rounded-full' src={currentChannel?.snippet?.thumbnails?.high?.url} />
                  <div className='ml-5'>
                    <h1 className='font-semibold'>{currentVideo?.snippet?.channelTitle}</h1>
                    <h1 className='font-[200] text-xs'>{currentChannel?.statistics?.subscriberCount} subs..</h1>
                  </div>
                    <div className=' ml-20 flex w-96 justify-between'>
                    <button className='font-semibold p-2 bg-gray-100 hover:bg-gray-200 rounded-full px-5 ' onClick={()=>{
                      setSubscribe(!subscribe)
                    }}>{subscribe? "Subscribe":"Unsubscribe"}</button>
                    <button className='flex gap-3'><img className='w-6 ' src={like}/> {currentVideo?.statistics?.likeCount}</button>
                    </div>
              </div>
              <div  className='p-2 bg-gray-100 rounded-xl'>
                <p>
                    {currentVideo?.snippet?.description}
                </p>
              </div>
              <div className='mt-6 bg-gray-100 rounded-lg'>
                <h1 className='p-2 font-semibold text-xl'>Comments</h1>
                  {comments && comments.map((comment, index)=>(
                    <div className=' my-4 bg-gray-200 rounded-lg' key={index}> 
                    <h1  className=' font-semibold'>{indianNames[index]}</h1>
                    <h1 >{comment?.textDisplay.slice(0,80)}</h1>
                    </div>
                  ))}
                </div>
      </div>

      <div>
                    {
                     videos1 && videos1.map((video,index)=><Link  to={"/watch?v="+video.id}><SideVideoCards key={index} info= {video?.snippet}/></Link>)
                    }
      </div>              
    </div>
    
  )
}

export default WatchPage