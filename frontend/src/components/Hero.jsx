import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div>
        <div className="flex flex-col sm:flex-row p-5" style={{backgroundColor: "#E9EBE0"}}>
                <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
                    <div className="mb-4">
                        <p className="fw-bold "><span className="text-gray-500">Brand:</span><span> Specialized</span></p>
                        <p className="h4 fw-bold poppins-bold" style={{fontSize: 90 +'px'}}>Eura Bike Shop</p>
                        <p className="text-gray-500 text-xl py-10">Performance built to handle any terrain & riding style.</p>
                        <Link to={"/bikes"} className="border border-gray-500 fw-bold rounded-full text-xl px-4 py-3 bg-black text-white">Shop Bikes <i className="fa-solid fa-arrow-right text-xl"></i></Link>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
                    <div className='p-10'>
                        <img src="https://themes.hibootstrap.com/eura/wp-content/uploads/2024/02/hero-img-1.png" id="xedap" alt=""/>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Hero