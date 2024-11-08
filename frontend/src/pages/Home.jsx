import React from 'react'
import NewProducts from '../components/NewProducts'
import Hero from '../components/Hero'
import BestSeller from '../components/BestSeller'
import NewLetterBox from '../components/NewLetterBox'
import Benefit from '../components/Benefit'

const Home = () => {
  return (
    <div>
        <Hero/>
        <div className="w-full">
            <Benefit />
        </div>
        <NewProducts/>
        <NewLetterBox/>
        <BestSeller/>
    </div>
  )
}

export default Home