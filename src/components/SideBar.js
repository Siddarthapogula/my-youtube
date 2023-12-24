import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {

  const isSlide = useSelector(store => store.app.isOpenMenu);
  if(!isSlide){
    return null;
  }

  return (
    <div className=' px-4 fixed  flex flex-col justify-center'>
        <ul className=' mb-4  shadow-lg font-semibold'>
            <li><Link to="/">Home</Link></li>
            <li>Shorts</li>
            <li>Subscriptions</li>
        </ul>
        <h1 className=' font-bold'>Explore</h1>
        <ul>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
            <li>Live</li>
            <li>Gaming</li>
            <li>News</li>
            <li>Sports</li>
            <li>Learning</li>
            <li>Fashion & Beauty</li>
            <li>Podcasts</li>
        </ul>
    </div>
  )
}

export default SideBar