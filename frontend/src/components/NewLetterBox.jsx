import React from 'react'

const NewLetterBox = () => {

    const onSubmitHandle = (event) => {
        event.preventDefault();
    }

  return (
    <div className="w-full guimail">
        <div className="sm:p-[50px] my-3 bg">
            <p className="poppins-bold text-white text-xl sm:text-5xl" >Discover Your<br/>Favorite Bike</p>
            <form onSubmit={onSubmitHandle} className='sm:w-1/2 flex items-center gap-3 my-6 border pl-3 bg-white'>
                <input type="text" className='w-full sm:flex-1 outline-none' placeholder='Enter your email' required/>
                <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBCRIBE</button>
            </form>
        </div>
    </div>
  )
}

export default NewLetterBox