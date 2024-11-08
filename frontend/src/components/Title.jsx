import React from 'react'

const Title = ({text}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
        <p className='poppins-medium'>{text}</p>
        <hr className='border-none h-[2.5px] w-10 bg-gray-800' />
    </div>
  )
}

export default Title