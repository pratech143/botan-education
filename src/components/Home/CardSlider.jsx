import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CardSlider = ({ cards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cards.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === cards.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-full max-w-6xl mx-auto px-6 py-20">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-white">What Our Students Say</h2>
                <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Real feedback from real learners</p>
            </div>

            <div className="relative flex items-center justify-center">
                <button
                    onClick={handlePrev}
                    className="absolute left-0 md:-left-10 z-10 w-10 h-10 rounded-full bg-white/70 dark:bg-gray-700 backdrop-blur shadow-md flex items-center justify-center hover:scale-110 transition"
                >
                    <svg className="w-5 h-5 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="max-w-4xl w-full text-center"
                    >

                        <div className="relative px-8 py-12 bg-gradient-to-br from-white to-orange-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-xl">
                            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                                <img
                                    src={cards[currentIndex].image}
                                    alt={cards[currentIndex].name}
                                    className="w-24 h-24 rounded-full object-cover ring-4 ring-orange-400"
                                />
                            </div>
                            <blockquote className="mt-16">
                                <p className="text-xl italic text-gray-700 dark:text-gray-200">"{cards[currentIndex].description}"</p>
                                <footer className="mt-6 text-lg font-medium text-orange-600 dark:text-orange-400">
                                    — {cards[currentIndex].name}
                                </footer>
                            </blockquote>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <button
                    onClick={handleNext}
                    className="absolute right-0 md:-right-10 z-10 w-10 h-10 rounded-full bg-white/70 dark:bg-gray-700 backdrop-blur shadow-md flex items-center justify-center hover:scale-110 transition"
                >
                    <svg className="w-5 h-5 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
                {cards.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-orange-500' : 'w-2 bg-gray-300 dark:bg-gray-600'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardSlider;
