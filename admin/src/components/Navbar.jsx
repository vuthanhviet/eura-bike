import React from 'react'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
        <div className='flex flex-col'>
            <img className='w-[max(10%,80px)]' src="https://themes.hibootstrap.com/eura/wp-content/uploads/2024/02/logo.png" alt="" />
            <p className='text-xl font-medium text-red-700'>Admin Panel</p>
        </div>
        <button onClick={() => setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar