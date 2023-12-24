import React, { useEffect, useState } from 'react';
import { YT_VIDEOS_API } from './utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMovies } from './utils/movieSlice';

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();

  const getVideos = async () => {
    try {
      const response = await fetch(YT_VIDEOS_API);
      const data = await response.json();
      
      setVideos(data);
    } catch (error) {
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
  }, [videos]);
  {videos && dispatch(addMovies(videos.items))}
  return (
    <div className='  flex flex-wrap justify-evenly'>
      {videos && videos.items && videos.items.map((video, index) => (
        <Link to={"/watch?v="+video.id} > <VideoCard key={index} info={video} /></Link>
      ))}
    </div>
  );
  
};

export default VideoList;
