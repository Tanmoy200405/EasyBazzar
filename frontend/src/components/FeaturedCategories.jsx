import React from 'react'
import { assets } from '../assets/assets'

const FeaturedCategories = () => {
    const categories = [
        { name: 'Men', img: assets.p_img7, path: '/collection' },
        { name: 'Women', img: assets.p_img1, path: '/collection' },
        { name: 'Kids', img: assets.p_img3, path: '/collection' }
    ]

    return (
        <div className='py-10 animate-fadeInUp'>
            <div className='flex flex-col items-center mb-10'>
                <h2 className='text-3xl font-bold tracking-tight'>Featured <span className='text-gray-400 font-light italic'>Categories</span></h2>
                <div className='w-20 h-1 bg-black mt-4'></div>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {categories.map((cat) => (
                    <div key={cat.name} className='group relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer'>
                        <img className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' src={cat.img} alt={cat.name} />
                        <div className='absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all flex items-center justify-center'>
                            <div className='text-center'>
                                <h3 className='text-white text-3xl font-bold mb-4 translate-y-4 group-hover:translate-y-0 transition-transform'>{cat.name}</h3>
                                <button className='bg-white text-black px-6 py-2 rounded-full font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0'>
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturedCategories
