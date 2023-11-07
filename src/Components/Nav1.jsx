import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import { FaXmark, FaBars } from 'react-icons/fa6';

const Nav1 = () => {
    const [isMenuOpen, setisMenuOpen] = useState(false);
    const [isSticky, setisSticky] = useState(false);

    //menu toggler
    const toggleMenu = () => {
        setisMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
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

    // nav items;
    const navitem = [
        { link: "Home" },
        { link: "About" },
        { link: "Chapter" },
        { link: "Review" },
        { link: "Books" },
        { link: "Author" },
        { link: "Contact" }
    ]


    return (

        <header>
            <nav className = {`${isSticky ? "fixed top-0 left-0 right-0 border-b bg-white duration-300 " : ""} ml-8`}>
                {/* logo section */}
                <div className='flex items-center text-base justify-between gap-8 p-5 pl-16 pr-16'>
                    <a href='/' className='text-3xl font-black items-center space-x-3 w-3/4'>Author<span className='text-[#17b978]'>.</span></a>

                    {/* nav items */}

                    <ul className='md:flex space-x-12 hidden text-[#263b5e] font-bold'>
                        {
                            navitem.map(({ link }) => <Link spy={true} smooth={true} offset={-100} className='block text-base 
                 hover:text-brandprimary cursor-pointer hover:underline decoration-color_primary hover:decoration-[2px] underline-offset-8'> {link} </Link>)
                        }
                    </ul>

                    {/* menu button mobile devices */}

                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='focus:outline-none pr-6'>

                            {
                                isMenuOpen ? <FaXmark className='w-7 h-7' /> : <FaBars className='w-7 h-7' />
                            }

                        </button>
                    </div>
                </div>
            </nav>

            {/* menu items for mobile view */}

            <div className= {`md:hidden bg-color_primary fixed z-50 pl-32 ${isMenuOpen ? "":"hidden"} p-4 rounded-lg w-full` }>
                {
                    navitem.map(({ link }) => <Link spy={true} smooth={true} offset={-100} className='block text-base 
                  cursor-pointer bg-color_primary text-white font-semibold p-2 hover:text-gray-600'> {link} </Link>)
                }
            </div>
        </header>
    )
}

export default Nav1;