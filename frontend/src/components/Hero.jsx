import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row rounded-3xl overflow-hidden bg-[#f3f4f6] min-h-[70vh] items-center animate-fadeInUp'>
            {/* Hero Left Side */}
            <div className='w-full sm:w-1/2 flex items-center justify-center py-20 px-10 sm:py-0'>
                <div className='text-primary max-w-lg'>
                    <div className='flex items-center gap-3 mb-6 stagger-1'>
                        <p className='w-12 h-[2px] bg-accent'></p>
                        <p className='font-bold text-xs tracking-[0.2em] text-accent uppercase'>Curated Selection</p>
                    </div>
                    
                    <h1 className='prata-regular text-5xl sm:text-6xl lg:text-7xl leading-[1.1] mb-8 stagger-2'>
                        Redefine Your <br />
                        <span className='text-gray-400 font-light italic'>Style</span>
                    </h1>
                    
                    <div className='flex items-center gap-6 stagger-3'>
                        <button className='btn-primary'>
                            Explore Collections
                        </button>
                        <div className='flex items-center gap-2 group cursor-pointer'>
                            <p className='font-bold text-sm tracking-widest transition-all group-hover:mr-2'>VIEW ALL</p>
                            <p className='w-8 h-[1px] bg-primary group-hover:w-12 transition-all'></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Right Side */}
            <div className='w-full sm:w-1/2 relative overflow-hidden h-[50vh] sm:h-auto self-stretch'>
                <img className='w-full h-full object-cover transition-transform duration-1000 hover:scale-105' src={assets.hero_new} alt="Hero" />
                <div className='absolute inset-0 bg-gradient-to-r from-[#f3f4f6] to-transparent opacity-20 sm:opacity-40 pointer-events-none'></div>
            </div>
        </div>
    )
}

export default Hero
