import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing Font Awesome icons

const CardSlider = ({ cards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto py-8">
            {/* Card Container */}
            <div className="relative flex items-center justify-center overflow-hidden">
                {/* Previous Button */}
                <button
                    onClick={handlePrev}
                    className="absolute left-5 sm:left-10 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg opacity-80 hover:opacity-100 transition ease-in-out z-10"
                >
                    <FaChevronLeft size={30} />
                </button>

                {/* Display only the current card */}
                <div
                    key={cards[currentIndex].id}
                    className="transition-all duration-500 ease-in-out transform shadow-lg hover:shadow-2xl rounded-lg bg-white dark:bg-gray-800 overflow-hidden w-full border-2 border-gray-300 dark:border-gray-700"
                >
                    <div className="card">
                        {/* Image */}
                        <img
                            src={cards[currentIndex].image}
                            alt={`Card ${cards[currentIndex].id}`}
                            className="w-full h-auto object-contain max-h-[300px] mx-auto rounded-t-lg transition-transform duration-500"
                        />
                        <div className="p-6 text-center">
                            {/* Card Name */}
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                                {cards[currentIndex].name}
                            </h3>
                            {/* Card Description */}
                            <p className="text-gray-600 dark:text-gray-300 text-base mb-6">
                                {cards[currentIndex].description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    className="absolute right-5 sm:right-10 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg opacity-80 hover:opacity-100 transition ease-in-out z-10"
                >
                    <FaChevronRight size={30} />
                </button>
            </div>
        </div>
    );
};

export default CardSlider;
