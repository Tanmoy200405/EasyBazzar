import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);

    return (
        <Link 
            onClick={() => scrollTo(0, 0)} 
            className='product-card block group p-2 rounded-2xl animate-fadeInUp' 
            to={`/product/${id}`}
        >
            <div className='relative overflow-hidden rounded-xl bg-gray-100 aspect-[3/4]'>
                <img 
                    className='w-full h-full object-cover transition-all duration-700 group-hover:scale-105' 
                    src={image[0]} 
                    alt={name} 
                />
                <div className='absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0'>
                    <div className='bg-black text-white p-3 rounded-full shadow-xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    </div>
                </div>
            </div>
            
            <div className='px-2 py-4'>
                <p className='text-xs font-bold text-gray-400 tracking-widest uppercase mb-1'>New Arrival</p>
                <h3 className='text-gray-900 font-semibold text-base mb-1 truncate group-hover:text-black transition-colors'>
                    {name}
                </h3>
                <p className='text-lg font-bold text-black'>
                    {currency}{price}
                </p>
            </div>
        </Link>
    )
}

export default ProductItem
