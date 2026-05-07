import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <footer className='bg-[#f8fafc] rounded-t-[3rem] mt-40 px-10 pt-20 pb-10'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col sm:grid grid-cols-[2fr_1fr_1fr_1fr] gap-16 text-sm mb-20'>
                    
                    <div className='space-y-8'>
                        <h1 className='text-4xl font-bold tracking-tighter'>
                            Easy <span className='text-gray-400 font-light'>Bazzar</span>
                        </h1>
                        <p className='text-gray-500 leading-relaxed max-w-sm'>
                            Elevating your everyday style with curated collections and premium essentials. Quality you can feel, designs you can trust.
                        </p>
                        <div className='flex gap-4'>
                            {['IG', 'TW', 'FB', 'LI'].map((social) => (
                                <div key={social} className='w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition-all'>
                                    {social}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='space-y-6'>
                        <p className='text-lg font-bold tracking-tight'>EXPLORE</p>
                        <ul className='flex flex-col gap-3 text-gray-500'>
                            {['Home', 'Collections', 'About Us', 'Contact'].map((link) => (
                                <li key={link} className='hover:text-black hover:translate-x-1 transition-all cursor-pointer'>
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='space-y-6'>
                        <p className='text-lg font-bold tracking-tight'>SUPPORT</p>
                        <ul className='flex flex-col gap-3 text-gray-500'>
                            {['Delivery Info', 'Privacy Policy', 'Returns', 'Terms of Service'].map((link) => (
                                <li key={link} className='hover:text-black hover:translate-x-1 transition-all cursor-pointer'>
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='space-y-6'>
                        <p className='text-lg font-bold tracking-tight'>GET IN TOUCH</p>
                        <ul className='flex flex-col gap-4 text-gray-500'>
                            <li className='flex items-center gap-3'>
                                <div className='w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center'>📞</div>
                                +1-212-456-7890
                            </li>
                            <li className='flex items-center gap-3'>
                                <div className='w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center'>✉️</div>
                                contact@easybazzar.com
                            </li>
                        </ul>
                    </div>

                </div>

                <div className='pt-10 border-t border-gray-200'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
                        <p className='text-sm text-gray-400'>
                            &copy; 2024 Easy Bazzar. All Rights Reserved.
                        </p>
                        <div className='flex gap-8'>
                            <img className='h-6 grayscale opacity-50 hover:opacity-100 transition-opacity cursor-pointer' src={assets.stripe_logo} alt="stripe" />
                            <img className='h-6 grayscale opacity-50 hover:opacity-100 transition-opacity cursor-pointer' src={assets.razorpay_logo} alt="razorpay" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
