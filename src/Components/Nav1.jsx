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
            <nav className = 'ml-8'>
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

            <div className= {`md:hidden bg-color_primary pl-32 ${isMenuOpen ? "":"hidden"} p-4 rounded-lg`}>
                {
                    navitem.map(({ link }) => <Link spy={true} smooth={true} offset={-100} className='block text-base 
                  cursor-pointer bg-color_primary text-white font-semibold p-2 hover:textnpm-text_blue'> {link} </Link>)
                }
            </div>
        </header>
    )
}

export default Nav1;