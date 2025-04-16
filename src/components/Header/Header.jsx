import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { DarkModeContext } from '../../contexts/darkModeContext.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "/png100px/logo.png";

function Header() {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
    const [isTestsOpen, setIsTestsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
        setIsDestinationsOpen(false);
        setIsTestsOpen(false);
    }, [location]);

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsDestinationsOpen(false);
        setIsTestsOpen(false);
    };

    const handleTestsToggle = () => {
        setIsTestsOpen(!isTestsOpen);
        setIsDestinationsOpen(false);
    };

    const handleDestinationsToggle = () => {
        setIsDestinationsOpen(!isDestinationsOpen);
        setIsTestsOpen(false);
    };

    const destinations = [
        { name: "Japan", src: "/png100px/jp.png" },
        { name: "Australia", src: "/png100px/au.png" },
        { name: "USA", src: "/png100px/us.png" },
        { name: "NewZealand", src: "/png100px/nz.png" },
        { name: "United Kingdom", src: "/png100px/uk.png" }
    ];

    const Tests = [
        { name: "IELTS" },
        { name: "JLPT" },
        { name: "SAT" },
    ];

    const menuVariants = {
        closed: { opacity: 0, y: -20 },
        open: { opacity: 1, y: 0 }
    };

    const dropdownVariants = {
        closed: { opacity: 0, scale: 0.95 },
        open: { opacity: 1, scale: 1 }
    };

    return (
        <header className={`fixed w-full z-50 top-0 transition-all duration-300 ${isScrolled ? 'shadow-lg backdrop-blur-lg bg-white/90 dark:bg-gray-800/90' : 'bg-white dark:bg-gray-800'
            }`}>
            <nav className="px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className="flex items-center space-x-4">
                        <button onClick={handleMenu} className="lg:hidden text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                        <Link to="/" className="flex items-center">
                            <motion.img
                                src={logo}
                                className="h-12"
                                alt="Logo"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            />
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        >
                            {darkMode ? '🌙' : '☀️'}
                        </motion.button>

                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="hidden md:inline-flex items-center px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-orange-600 to-orange-500 rounded-full shadow-lg hover:from-orange-500 hover:to-orange-400 transition-all duration-300"
                            >
                                Get started
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </motion.button>
                        </Link>
                    </div>

                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={menuVariants}
                                className="w-full lg:flex lg:w-auto lg:order-1"
                            >
                                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                    <NavLinks
                                        Tests={Tests}
                                        destinations={destinations}
                                        isTestsOpen={isTestsOpen}
                                        isDestinationsOpen={isDestinationsOpen}
                                        handleTestsToggle={handleTestsToggle}
                                        handleDestinationsToggle={handleDestinationsToggle}
                                        dropdownVariants={dropdownVariants}
                                    />
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="hidden lg:flex lg:items-center lg:w-auto">
                        <ul className="flex items-center space-x-8 font-medium">
                            <NavLinks
                                Tests={Tests}
                                destinations={destinations}
                                isTestsOpen={isTestsOpen}
                                isDestinationsOpen={isDestinationsOpen}
                                handleTestsToggle={handleTestsToggle}
                                handleDestinationsToggle={handleDestinationsToggle}
                                dropdownVariants={dropdownVariants}
                            />
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

function NavLinks({ Tests, destinations, isTestsOpen, isDestinationsOpen, handleTestsToggle, handleDestinationsToggle, dropdownVariants }) {
    const location = useLocation();

    const linkClasses = ({ isActive }) => `
        relative px-3 py-2 text-sm font-medium transition-colors duration-200
        ${isActive
            ? 'text-orange-600 dark:text-orange-400'
            : 'text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400'}
    `;

    const dropdownButtonClasses = `
        flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 
        hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200
    `;

    return (
        <>
            <li>
                <NavLink to="/" className={linkClasses}>Home</NavLink>
            </li>

            <li className="relative">
                <button onClick={handleTestsToggle} className={dropdownButtonClasses}>
                    Tests
                    <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isTestsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <AnimatePresence>
                    {isTestsOpen && (
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={dropdownVariants}
                            className="mt-2 w-full lg:w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden 
                                   lg:absolute lg:left-0"
                        >

                            {Tests.map((test) => (
                                <NavLink
                                    key={test.name}
                                    to={`/${test.name}`}
                                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-gray-700"
                                >
                                    {test.name}
                                </NavLink>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </li>

            <li className="relative">
                <button onClick={handleDestinationsToggle} className={dropdownButtonClasses}>
                    Study Destinations
                    <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isDestinationsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <AnimatePresence>
                    {isDestinationsOpen && (
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={dropdownVariants}
                            className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
                        >
                            {destinations.map((destination) => (
                                <NavLink
                                    key={destination.name}
                                    to={`/${destination.name}`}
                                    className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-gray-700"
                                >
                                    <img className="w-6 h-6 mr-3" src={destination.src} alt={`${destination.name} flag`} />
                                    {destination.name}
                                </NavLink>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </li>

            <li>
                <NavLink to="/about" className={linkClasses}>About</NavLink>
            </li>

            <li>
                <NavLink to="/contact" className={linkClasses}>Contact us</NavLink>
            </li>

            <li>
                <a
                    href="https://wa.me/9779840044323"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                >
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8"
                        src="/whatsapp.png"
                        alt="WhatsApp"
                    />
                </a>
            </li>
        </>
    );
}

export default Header;