import React, { useContext, useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
    }

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ${scrolled ? 'py-3 glass-effect shadow-lg' : 'py-6 bg-transparent'}`}>
            <div className='flex items-center justify-between font-medium max-w-7xl mx-auto'>
                <Link to='/' className='group'>
                    <h1 className='text-2xl sm:text-3xl font-bold tracking-tighter transition-transform duration-300 group-hover:scale-105'>
                        Easy <span className='text-gray-400 font-light'>Bazzar</span>
                    </h1>
                </Link>

                <ul className='hidden sm:flex gap-8 text-sm font-semibold tracking-wide text-gray-700'>
                    <NavLink to='/' className='flex flex-col items-center gap-1 hover:text-black transition-colors'>
                        <p>HOME</p>
                        <hr className='w-full border-none h-[2px] bg-black hidden' />
                    </NavLink>
                    <NavLink to='/collection' className='flex flex-col items-center gap-1 hover:text-black transition-colors'>
                        <p>COLLECTION</p>
                        <hr className='w-full border-none h-[2px] bg-black hidden' />
                    </NavLink>
                    <NavLink to='/about' className='flex flex-col items-center gap-1 hover:text-black transition-colors'>
                        <p>ABOUT</p>
                        <hr className='w-full border-none h-[2px] bg-black hidden' />
                    </NavLink>
                    <NavLink to='/contact' className='flex flex-col items-center gap-1 hover:text-black transition-colors'>
                        <p>CONTACT</p>
                        <hr className='w-full border-none h-[2px] bg-black hidden' />
                    </NavLink>
                </ul>

                <div className='flex items-center gap-6'>
                    <div className='hover:scale-110 transition-transform cursor-pointer'>
                        <img onClick={() => { setShowSearch(true); navigate('/collection') }} src={assets.search_icon} className='w-5' alt="search" />
                    </div>

                    <div className='group relative'>
                        <img onClick={() => token ? null : navigate('/login')} className='w-5 cursor-pointer hover:scale-110 transition-transform' src={assets.profile_icon} alt="profile" />
                        {token &&
                            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                                <div className='flex flex-col gap-2 w-40 py-3 px-5 glass-effect rounded-xl shadow-2xl animate-fadeInUp'>
                                    <p className='cursor-pointer hover:text-black hover:translate-x-1 transition-all'>My Profile</p>
                                    <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black hover:translate-x-1 transition-all'>Orders</p>
                                    <p onClick={logout} className='cursor-pointer hover:text-black hover:translate-x-1 transition-all'>Logout</p>
                                </div>
                            </div>}
                    </div>

                    <Link to='/cart' className='relative group'>
                        <img src={assets.cart_icon} className='w-5 min-w-5 group-hover:scale-110 transition-transform' alt="cart" />
                        <p className='absolute right-[-8px] top-[-8px] w-5 h-5 flex items-center justify-center bg-black text-white rounded-full text-[10px] shadow-lg group-hover:scale-110 transition-transform'>{getCartCount()}</p>
                    </Link>

                    <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden hover:scale-110 transition-transform' alt="menu" />
                </div>

                {/* Sidebar menu for small screens */}
                <div className={`fixed top-0 right-0 bottom-0 z-50 overflow-hidden bg-white shadow-2xl transition-all duration-500 ${visible ? 'w-full' : 'w-0'}`}>
                    <div className='flex flex-col text-gray-600 h-full'>
                        <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-6 cursor-pointer border-b hover:bg-gray-50 transition-colors'>
                            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="back" />
                            <p className='text-lg font-medium'>Close</p>
                        </div>
                        <div className='flex flex-col mt-4'>
                            <NavLink onClick={() => setVisible(false)} className='py-6 pl-10 border-b text-xl font-light hover:bg-gray-50 transition-colors' to='/'>HOME</NavLink>
                            <NavLink onClick={() => setVisible(false)} className='py-6 pl-10 border-b text-xl font-light hover:bg-gray-50 transition-colors' to='/collection'>COLLECTION</NavLink>
                            <NavLink onClick={() => setVisible(false)} className='py-6 pl-10 border-b text-xl font-light hover:bg-gray-50 transition-colors' to='/about'>ABOUT</NavLink>
                            <NavLink onClick={() => setVisible(false)} className='py-6 pl-10 border-b text-xl font-light hover:bg-gray-50 transition-colors' to='/contact'>CONTACT</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
