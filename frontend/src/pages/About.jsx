import React from 'react'
import Benefit from '../components/Benefit'
import BestSeller from '../components/BestSeller'
import NewLetterBox from '../components/NewLetterBox'
import Title from '../components/Title'

const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
          <Title text={'About Us'} />
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img src="https://themes.hibootstrap.com/eura/wp-content/uploads/2024/02/about-img-3.png" className='w-full md:max-w-[550px]' alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p className='text-3xl font-medium'>Clean and timeless designs that make every ride a thrill. Wherever you're heading, <span className='text-gray-400'>our bikes are made to make your daily commute a joy.</span></p>
            <p>This isn’t a bicycle. This is a soul stirring, bring-a-smile-to-your-face, aerodynamic work of art. Designed to move you through the world without the weight of it. Where your cycling journey begins! As avid cyclists not ourselves, we understand the joy and freedom for a comes from pedaling</p>
            <div className='flex sm:flex-row flex-col justify-between bg-sky-100 p-5 gap-6'>
              <div className='flex flex-col justify-center gap-4'>
                <img src="https://themes.hibootstrap.com/eura/wp-content/uploads/2024/02/cycle-with-shield.svg" className='max-w-[67px] mx-auto sm:mx-0' alt="" />
                <p className='text-gray-400 text-sm text-center sm:text-start'>Limited lifetime warranty on all Bikes.</p>
              </div>
              <div className='flex flex-col justify-center gap-4'>
                <img src="https://themes.hibootstrap.com/eura/wp-content/uploads/2024/02/shipping-cycle.svg" className='max-w-[67px] mx-auto sm:mx-0' alt="" />
                <p className='text-gray-400 text-sm text-center sm:text-start'>Free ground shipping and easy returns.</p>
              </div>
              <div className='flex flex-col justify-center gap-4'>
                <img src="https://themes.hibootstrap.com/eura/wp-content/uploads/2024/02/cycle-tools.svg" className='max-w-[67px] mx-auto sm:mx-0' alt="" />
                <p className='text-gray-400 text-sm text-center sm:text-start'>Designed, engineered & assembled in the USA.</p>
              </div>
            </div>
          </div>
        </div>
        <Benefit />
        <NewLetterBox/>
        <BestSeller/>
    </div>
  )
}

export default About