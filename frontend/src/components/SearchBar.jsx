import React, { useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext'

const SearchBar = () => {
    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const [visible, setVisible] = useState(false)
    const location = useLocation();

    useEffect(() => {
        if(location.pathname.includes('bikes')){
            setVisible(true);
        }else{
            setVisible(false);
        }
    }, [location])

  return showSearch && visible ?  (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className='flex-1 outline-none bg-inherit text-sm' placeholder='Search' />
            <i className="fa-solid fa-magnifying-glass text-xl cursor-pointer"></i>
        </div>
        <i onClick={() =>setShowSearch(false)} className="fa-solid fa-x text-lg cursor-pointer"></i>
    </div>
  ) : null
}

export default SearchBar