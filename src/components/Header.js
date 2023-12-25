import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToggleOpenMenu } from './utils/sideSlice';
import { Link, Navigate, unstable_HistoryRouter, useNavigate } from 'react-router-dom';
import { addSearchSuggestions } from './utils/suggestionSlice';
import SearchSuggestions from './SearchSuggestions';
import searchCache, { addCache } from './utils/searchCache';
import VideoButtons from './VideoButtons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

const Header = () => {
  const [ searchText , setSearchText] = useState(""); 
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const cache = useSelector(store => store.cache)
    
  const dispatch = useDispatch();
  const handleSlideBar = ()=>{
    
      dispatch(ToggleOpenMenu());
  }
  const getSearchSuggestions = async()=>{
      const data = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+searchText);
      const response = await data.json();
      dispatch (addSearchSuggestions(response[1]));
      dispatch(addCache({
        [searchText] : response[1]
  }))
  }
  const suggestions = useSelector(store=> store.search.searchSuggestions);

  // console.log(cache);
  useEffect(()=>{
    const timer = setTimeout(() => {
       if (searchText && cache[searchText]) {
      dispatch(addSearchSuggestions(searchCache[searchText]))
    } else {
      getSearchSuggestions();
    }
    }, 100);
   return()=>{
    clearTimeout(timer)
   }
  },[searchText])

  

  return (
    <div className=' w-full fixed bg-white top-0  z-10'>
    <div className=' flex justify-between my-3 px-2 shadow-lg '>
      <div className=' flex w-3/12'>
        <img onClick={()=>handleSlideBar()} className=' w-8 h-8 cursor-pointer' alt='sideBar' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png'/>
       <Link to="/"><img className=' cursor-pointer w-24 ml-4 -translate-y-2 pb-2' alt='ytLogo' src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg'/></Link>
      </div>
      <div className='w-1/2 items-center mt-1 mr-24'
      onFocus={()=>setIsSuggestionsOpen(true)}
      onScroll={()=>setIsSuggestionsOpen(false)}
      >

        <input className= ' w-3/4  border border-l-gray-300 p-2 rounded-l-full' type=' text ' placeholder={'Search'}
          value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value);
          }}
        />
        <button className=' border-gray-500  bg-gray-100 p-[0.55rem] px-[1.5rem]  rounded-r-full '><FontAwesomeIcon icon={faSearch} /></button>
    
        {isSuggestionsOpen && (
  <div className='fixed bg-gray-50 w-[30rem] rounded-lg'
  onFocus={()=>setIsSuggestionsOpen(true)}
      onBlur={()=>setIsSuggestionsOpen(false)}>
    {suggestions &&
      suggestions.map((s, index) => (
        <Link to={'/suggestedvideos/'+s}  key={index}>
          <SearchSuggestions data={s} />
        </Link>
      ))}
  </div>
)}
      </div>
      <div>
        <img className=' w-12' src='https://th.bing.com/th/id/R.7ea4af7d8401d2b43ee841bfa2abe89d?rik=xidyUKdveUKULQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-download-icons-logos-emojis-users-2240.png&ehk=2%2bOqgdMZqFkKaBclc%2fPL9B86vLju3iBGiFmH64kXaTM%3d&risl=&pid=ImgRaw&r=0'/>
      </div>
    </div>
    
    </div>
  )
}

export default Header