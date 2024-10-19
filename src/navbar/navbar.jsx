import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoNav from '../asset/Asset 2 1.png';
import downloadIcon from '../asset/Group 3.png';
import { HiOutlineBars3BottomRight, HiXMark } from "react-icons/hi2";

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    const handleLinkClick = () => {
        setNavOpen(false);
    };

    return (
        <>
        
            <div className='main-navbar bg-white shadow-lg fixed top-0 left-0 w-full z-[1000]'>
                <div className="container mx-auto px-4 lg:max-w-[1440px] h-20 flex justify-between items-center">

                    <div className="nav-logo">
                        <img src={logoNav} alt="Logo" className="h-7 w-auto" />
                    </div>

                    <div className="lg:hidden">
                        <button onClick={toggleNav} className="text-3xl text-black font-extrabold">
                            {navOpen ? <HiXMark /> : <HiOutlineBars3BottomRight />}
                        </button>
                    </div>

                    <div className={`nav-links lg:flex lg:items-center ${navOpen ? 'block' : 'hidden'} absolute lg:relative top-20 left-0 w-full lg:w-auto bg-gray-300 lg:bg-transparent lg:top-0 z-10 transition-all duration-300`}>
                        <ul className='flex flex-col lg:flex-row lg:space-x-10 items-start lg:items-center lg:ml-10 lg:px-0 px-10'>
                            <li className="my-4 lg:my-0">
                                <Link to="/" onClick={handleLinkClick}
                                    className="relative text-lg font-sans font-semibold text-darkBlue hover:text-customorange transition-all duration-300 ease-in-out after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-customorange after:transition-all after:duration-300">
                                    Home
                                </Link>
                            </li>
                            <li className="my-4 lg:my-0">
                                <Link to="/about" onClick={handleLinkClick}
                                    className="relative text-lg font-sans font-semibold text-darkBlue hover:text-customorange transition-all duration-300 ease-in-out after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-customorange after:transition-all after:duration-300">
                                    About
                                </Link>
                            </li>
                            <li className="my-4 lg:my-0">
                                <Link to="/blog" onClick={handleLinkClick}
                                    className="relative text-lg font-sans font-semibold text-darkBlue hover:text-customorange transition-all duration-300 ease-in-out after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-customorange after:transition-all after:duration-300">
                                    Blog
                                </Link>
                            </li>
                            <li className="my-4 lg:my-0">
                                <Link to="/privacy" onClick={handleLinkClick}
                                    className="relative text-lg font-sans font-semibold text-darkBlue hover:text-customorange transition-all duration-300 ease-in-out after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-customorange after:transition-all after:duration-300">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li className="my-4 lg:my-0">
                                <Link to="/help" onClick={handleLinkClick}
                                    className="relative text-lg font-sans font-semibold text-darkBlue hover:text-customorange transition-all duration-300 ease-in-out after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-customorange after:transition-all after:duration-300">
                                    Help Center
                                </Link>
                            </li>
                        </ul>

                        <div className="max-w-[189px] mt-4 lg:mt-0 mb-4 lg:mb-0 text-lg font-sans font-semibold bg-orange-600 hover:bg-green-700 text-white p-3 m-8 rounded-full lg:inline-flex lg:ml-10">
                            <button className="flex items-center">
                                <img src={downloadIcon} alt="Download Icon" className='mr-2' />
                                <span>Download App</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
