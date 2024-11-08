import React from 'react'
import NewLetterBox from '../components/NewLetterBox'
import Title from '../components/Title'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text={'CONTACT US'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src="https://themes.hibootstrap.com/eura/wp-content/uploads/2024/02/faq.png" alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='text-3xl font-semibold'>Get in touch</p>
          <p className='max-w-[480px] text-sm text-gray-500'>Welcome to <span className='font-semibold'>Eura</span>, where your cycling journey begins! As avid cyclists ourselves, we understand the joy freedom that comes from pedaling.</p>
          <p className='text-xl font-semibold'>Call us:</p>
          <p className='text-base text-gray-500'>+3325545232-66 <span className='text-gray-500 font-semibold'>/</span> +4224422533-66</p>
          <p className='text-xl font-semibold'>Send mail:</p>
          <p className='text-base text-gray-500'>support@eura.com <span className='text-gray-500 font-semibold'>/</span> info@eura.com</p>
          <p className='text-xl font-semibold'>Our location:</p>
          <p className='text-base text-gray-500'>1200 Main St. Santa Rosa, CA 93541, Australia</p> 
        </div>
      </div>
      <NewLetterBox />
    </div>
  )
}

export default Contact