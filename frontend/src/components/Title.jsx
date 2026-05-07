import React from 'react'

const Title = ({ text1, text2 }) => {
    return (
        <div className='flex flex-col items-center mb-12 animate-fadeInUp'>
            <div className='flex items-center gap-4'>
                <h2 className='text-3xl sm:text-4xl font-bold tracking-tight text-gray-900'>
                    {text1} <span className='text-gray-400 font-light italic'>{text2}</span>
                </h2>
            </div>
            <div className='mt-4 flex items-center gap-2'>
                <p className='w-12 h-[2px] bg-accent'></p>
                <div className='w-2 h-2 rounded-full bg-accent'></div>
                <p className='w-12 h-[2px] bg-accent'></p>
            </div>
        </div>
    )
}

export default Title
