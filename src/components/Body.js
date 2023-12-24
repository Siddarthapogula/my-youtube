import React from 'react'
import SideBar from './SideBar'
import VideoContainer from './VideoContainer'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Body = () => {

  const isSidebarOpen = useSelector(store => store.app.isOpenMenu);


  return (
     <div className='pt-[5rem]'>
      <div className={`flex ${isSidebarOpen ? '' : 'full-width'}`}>
        <div className={`w-2/12 ${isSidebarOpen ? '' : 'hidden'}`}>
          <SideBar  />
        </div>
        <div className={`w-10/12 ${isSidebarOpen ? '' : 'w-full'}`}>
          <Outlet />
        </div>
      </div>
      </div>
  )
}



export default Body