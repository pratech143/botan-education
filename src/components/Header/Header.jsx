import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { DarkModeContext } from '../../contexts/darkModeContext.jsx'; // Import the context
import logo from "/png100px/logo.png";

function Header() {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext); // Use global dark mode context
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
    const [isTestsOpen, setIsTestsOpen] = useState(false);
    const dropdown = isMenuOpen ? "block" : "hidden";

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleDestinationsToggle = () => {
        setIsDestinationsOpen(!isDestinationsOpen);
    };
    const handleTestsToggle = () => {
        setIsTestsOpen(!isTestsOpen);
    };

    const destinations = [
        { name: "Japan", src: "/png100px/jp.png" },
        { name: "Australia", src: "/png100px/au.png" },
        { name: "USA", src: "/png100px/us.png" },
        { name: "NewZealand", src: "/png100px/nz.png" },
        { name: "United Kingdom", src: "/png100px/uk.png" }
    ];

    const Tests = [
        { name: "IELTS"},
        { name: "JLPT"},
        { name: "SAT"},
        
    ];

    return (
        <header className="shadow fixed w-full z-50 top-0">
            <nav className={`bg-white ${darkMode ? 'dark:bg-gray-800 text-white' : ''} border-gray-200 px-4 lg:px-6 py-2.5`}>
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className='lg:hidden'>
                        <a onClick={handleMenu} className='text-4xl cursor-pointer inline' href="#">&#8801;</a>
                    </div>
                    <Link to="/" className="flex items-center">
                        <img src={logo} className="mr-3 h-12" alt="Logo" />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        {/* Dark Mode Toggle Button */}
                        <button
                            onClick={toggleDarkMode}
                            className="mr-4 text-2xl cursor-pointer text-black dark:text-white"
                        >
                            {darkMode ? '🌙' : '☀️'}
                        </button>
                        
                        <Link
                            to="/contact"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>

                    <div
                        className={`justify-between ${dropdown} items-center w-full lg:flex lg:w-auto lg:order-1`}
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 dark:border-none border-b ${isActive ? "text-orange-700" : "text-black"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 m-0 dark:text-white dark:hover:text-orange-700`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="relative ">
                                <button
                                    onClick={handleTestsToggle}
                                    className="flex items-center py-2 pr-4 pl-3 text-black duration-200 hover:text-orange-700 lg:border-0 lg:p-0 dark:text-white dark:hover:text-orange-700 "
                                >
                                    Tests
                                    <span className={`ml-2 transform ${isTestsOpen ? 'rotate-180' : ''}`}>
                                        &#9662;
                                    </span>
                                </button>
                                {isTestsOpen && (
                                    <div className="relative  lg:absolute left-0 w-96 bg-white dark:bg-gray-800 shadow-lg pt-4 rounded-md">
                                        <ul className="grid lg:grid-cols-2">
                                            {Tests.map((test, index) => (
                                                <li key={index}>
                                                    <NavLink
                                                        to={`/${test.name}`}
                                                        onClick={handleTestsToggle}
                                                        className="block  py-2 px-0.5 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                                                    >
                                                        <div className='flex items-center justify-center'>
                                                            <span className='dark:text-white'>{test.name}</span>
                                                        </div>
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>

                            <li className="relative ">
                                <button
                                    onClick={handleDestinationsToggle}
                                    className="flex items-center py-2 pr-4 pl-3 text-black duration-200 hover:text-orange-700 lg:border-0 lg:p-0 dark:text-white dark:hover:text-orange-700 "
                                >
                                    Study Destinations
                                    <span className={`ml-2 transform ${isDestinationsOpen ? 'rotate-180' : ''}`}>
                                        &#9662;
                                    </span>
                                </button>
                                {isDestinationsOpen && (
                                    <div className="relative lg:absolute left-0 w-96 bg-white dark:bg-gray-800 shadow-lg mt-1 rounded-md">
                                        <ul className="grid lg:grid-cols-2 lg:gap-4 p-2">
                                            {destinations.map((destination, index) => (
                                                <li key={index}>
                                                    <NavLink
                                                        to={`/${destination.name}`}
                                                        onClick={handleDestinationsToggle}
                                                        className="block py-2 px-0.5 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                                                    >
                                                        <div className='flex items-center'>
                                                            <img className='w-1/4 pl-1' src={destination.src} alt={`${destination.name} flag`} />
                                                            <span className='dark:text-white'>{destination.name}</span>
                                                        </div>
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 dark:border-none border-b ${isActive ? "text-orange-700" : "text-black"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 dark:text-white dark:hover:text-orange-700`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 dark:border-none border-b ${isActive ? "text-orange-700" : "text-black"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 dark:hover:text-orange-700 lg:p-0 dark:text-white `
                                    }
                                >
                                    Contact us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
