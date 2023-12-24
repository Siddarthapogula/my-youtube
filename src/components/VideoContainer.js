import React from 'react'
import VideoButtons from './VideoButtons'
import VideoList from './VideoList'

const VideoContainer = () => {
  return (
    <div className='p-2  ' >
        <VideoButtons/>
        <VideoList/>
    </div>

  )
}

export default VideoContainer