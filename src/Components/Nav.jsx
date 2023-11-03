import React, { useState, useEffect } from 'react'
import logo from '../assets/Icon.svg'
import { Link } from 'react-scroll';

import { FaXmark, FaBars } from "react-icons/fa6"

const Nav = () => {

    const [isMenuOpen, setisMenuOpen] = useState(false);
    const [isSticky, setisSticky] = useState(false);

    //set the menu toggler
    const toggleMenu = () => {
        setisMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setisSticky(true);
            }
            else {
                setisSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.addEventListener('scroll', handleScroll);
        }

    })

    //Navitems array
    const navitem = [
        { link: 'Home', path: "home" },
        { link: 'Service', path: "service" },
        { link: 'About', path: "about" },
        { link: 'Product', path: "product" },
        { link: 'Testimonial', path: "testimonial" },
        { link: 'FAQ', path: "faq" }
    ];

    return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
            <nav className={`py-4 lg:px-14  ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>
                <div className='flex justify-between items-center gap-8 text-base'>
                    <a href="/" className='text-2xl font-semibold items-center space-x-3 flex'><img src={logo} alt="Logo" className='w-10 inline-block items-center' /><span className='text-[#263238]'>NEXCENT</span></a>

                    {/* nav items */}

                    <ul className='md:flex space-x-12 hidden '>
                        {
                            navitem.map(({ link, path }) => <Link to={path} spy={true} smooth={true} key={path} offset={-100} className='block text-base text-gray900 hover:text-brandprimary first:font-medium cursor-pointer'> {link} </Link>)
                        }
                    </ul>

                    {/* btn for large devices */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <a href="/" className='hidden lg:flex items-center text-brandprimary hover:text-gray900 cursor-pointer'> Login</a>
                        <button className='bg-brandprimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDgray cursor-pointer'>Signup</button>
                    </div>

                    {/* menu button for mobile devices */}
                    <div className='md:hidden'>
                        <button
                            onClick={toggleMenu}
                            className='text-neutralDgray focus:outline-none focus:text-gray900 pr-6'>
                            {
                                isMenuOpen ? (<FaXmark className='h-6 w-6 ' />) : (<FaBars className='h-6 w-6 y' />)
                            }

                        </button>
                    </div>
                </div>
            </nav>


            {/* menu items for mobile view */}
            <div className={`space-y-4 px-4 mt-16 py-7 bg-brandprimary md:hidden ${isMenuOpen? "block fixed top-0 left-0 right-0":"hidden"}`}>
                {
                    navitem.map(({ link, path }) => <Link to={path} spy={true} smooth={true} key={path} offset={-100} className='block first:font-medium text-white'> {link} </Link>)
                }
            </div>
        </header>

    )
}

export default Nav;