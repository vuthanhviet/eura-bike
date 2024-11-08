import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import {NavLink, Link} from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const {setShowSearch, getCartCount, navigate, token, setToken, setCartItems} = useContext(ShopContext)

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token');
        setToken('');
        setCartItems({})
    }
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <Link to={"/"}>
            <img src="https://themes.hibootstrap.com/eura/wp-content/uploads/2024/02/logo.png" alt="Logo" className='w-36'/>
        </Link>

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to={"/"} className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to={"/bikes"} className='flex flex-col items-center gap-1'>
                <p>BIKES</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to={"/about"} className='flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to={"/contact"} className='flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
        </ul>

        <div className='flex items-center gap-6'>
            <i onClick={() => setShowSearch(true)} className="fa-solid fa-magnifying-glass text-xl cursor-pointer"></i>

            <div className="group relative">
                <i onClick={()=> token? null : navigate('/login')} className="fa-solid fa-user text-xl cursor-pointer"></i>
                {/* Dropdown Menu */}
                {token && 
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 px-5 py-3 bg-slate-100 text-gray-500 rounded'>
                        {/* <p className="cursor-pointer hover:text-black">My Profile</p>*/}
                        <p onClick={()=>navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p> 
                        <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
                    </div>
                </div>}
            </div>

            <Link to={"/cart"} className='relative'>
                <i className="fa-solid fa-bag-shopping text-xl cursor-pointer"></i>
                <p className='absolute right-[-5px] bottom-[-5px] border w-4 text-center leading-4 bg-white text-black aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>
            <i onClick={() => setVisible(true)} className="fa-solid fa-bars text-xl cursor-pointer sm:hidden"></i>
        </div>

        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3">
                    <i className="fa-solid fa-x text-lg cursor-pointer"></i>
                </div>
                <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to={"/"}>HOME</NavLink>
                <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to={"/bikes"}>BIKES</NavLink>
                <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to={"/about"}>ABOUT</NavLink>
                <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to={"/contact"}>CONTACT</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar