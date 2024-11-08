import React from 'react'

const Benefit = () => {
  return (
    <div>
        <div className="flex flex-col sm:flex-row gap-4 my-[100px]">
                <div className="">
                    <p className="my-3"><i className="fa-solid fa-location-arrow text-4xl"></i></p>
                    <h3 className='poppins-bold my-3'>GPS Tracking / Anti-Theft</h3>
                        <p className="text-gray-500 text-base">Where your cycling journey begins! As avid cyclists not ourselves, we understand the joy and freedom that for a comes from pedaling</p>
                </div>
                <div className="">
                    <p className="my-3"><i className="fa-solid fa-bolt text-4xl"></i></p>
                    <h3 className='poppins-bold my-3'>Supercharged Battery</h3>
                        <p className="text-gray-500 text-base">Where your cycling journey begins! As avid cyclists not ourselves, we understand the joy and freedom that for a comes from pedaling</p>
                </div>
                <div className="">
                    <p className="my-3"><i className="fa-solid fa-shield-halved text-4xl"></i></p>
                    <h3 className='poppins-bold my-3'>5 years warranty</h3>
                        <p className="text-gray-500 text-base">Where your cycling journey begins! As avid cyclists not ourselves, we understand the joy and freedom that for a comes from pedaling</p>
                </div>
            </div>      
            <hr className="py-5"/>
    </div>
  )
}

export default Benefit