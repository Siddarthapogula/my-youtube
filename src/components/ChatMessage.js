import React from 'react'

const ChatMessage = ({name, message}) => {

  return (
    <div className=' flex ml-2'>
        <img className='w-4 translate-y-[6px] h-4' src='https://th.bing.com/th/id/R.7ea4af7d8401d2b43ee841bfa2abe89d?rik=xidyUKdveUKULQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-download-icons-logos-emojis-users-2240.png&ehk=2%2bOqgdMZqFkKaBclc%2fPL9B86vLju3iBGiFmH64kXaTM%3d&risl=&pid=ImgRaw&r=0'/>
      <h1 className=' ml-2'>{name} : </h1>
      <h1 className=' ml-3'>{message}</h1>
    </div>
  )
}

export default ChatMessage