import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import FeaturedCategories from '../components/FeaturedCategories'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div className='flex flex-col gap-24'>
      <Hero />
      <FeaturedCategories />
      <LatestCollection/>
      <BestSeller/>
      <Testimonials />
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
