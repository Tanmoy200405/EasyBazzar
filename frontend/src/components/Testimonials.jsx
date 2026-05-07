import React from 'react'

const Testimonials = () => {
    const reviews = [
        { name: 'Sarah J.', text: 'The quality of the clothes is absolutely amazing. Highly recommended!', role: 'Verified Buyer' },
        { name: 'Michael R.', text: 'Fast delivery and excellent customer support. Will buy again!', role: 'Loyal Customer' },
        { name: 'Emma W.', text: 'Beautiful designs and perfect fit. My favorite online store.', role: 'Fashion Enthusiast' }
    ]

    return (
        <div className='py-20 bg-gray-50 rounded-[3rem] px-10 animate-fadeInUp'>
            <div className='flex flex-col items-center mb-16'>
                <h2 className='text-3xl font-bold tracking-tight'>What Our <span className='text-gray-400 font-light italic'>Customers Say</span></h2>
                <div className='w-20 h-1 bg-black mt-4'></div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {reviews.map((rev, index) => (
                    <div key={index} className='bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center text-center'>
                        <div className='text-accent text-4xl mb-6'>“</div>
                        <p className='text-gray-600 italic mb-8 leading-relaxed'>{rev.text}</p>
                        <div className='mt-auto'>
                            <h4 className='font-bold text-gray-900'>{rev.name}</h4>
                            <p className='text-xs text-gray-400 font-bold tracking-widest uppercase mt-1'>{rev.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials
