import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const SearchSuggestions = ({data}) => {
  return (
   
    <div className=' mt-2   px-4 hover:bg-gray-200 hover:cursor-pointer' ><FontAwesomeIcon className=' -ml-2 w-8'  icon={faSearch}/> {data}</div>

  
  )
}

export default SearchSuggestions