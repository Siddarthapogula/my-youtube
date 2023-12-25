import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons' 
import { addLiveChat } from './utils/chatSlice'
import { useDispatch, useSelector } from 'react-redux'
import ChatMessage from './ChatMessage'
import { indianNames, messages } from './utils/constants'
const LiveChat = () => {
  const dispatch = useDispatch();
  const [chatText, setChatText] = useState("");
  const chat = useSelector(store=> store.chat)

  function get_random (names) {
    return names[Math.floor((Math.random()*names.length))];
  }
 function get_messages (actualMessages){
    return actualMessages[Math.floor(Math.random() * actualMessages.length)]
 } 
  
  useEffect(()=>{
    const timer = setInterval(()=>{
      dispatch(addLiveChat({name:get_random(indianNames), message: get_messages(messages)}))
    },1500)
    return ()=>{
      clearInterval(timer);
    }
},[])
  return (

    <div className='w-[24rem]  p-1 flex '>
      <div className=' flex flex-col-reverse'>
      {
        chat && chat.map((chat1, index)=><ChatMessage name= {chat1.name} message={chat1.message} /> )
      }
      </div>
    </div>
  )
}

export default LiveChat