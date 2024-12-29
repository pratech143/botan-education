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
        <>

            <div className="relative w-full max-w-4xl mx-auto py-8">
                {/* Previous Button */}
                

                {/* Card Container */}
                <div className="relative flex items-center justify-center overflow-hidden">
                    {/* Display only the current card */}
                    <div
                        key={cards[currentIndex].id}
                        className="transition-all duration-500 ease-in-out transform shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_1px_3px_rgba(0,0,0,0.08)]"

                    >
                        <div className="card bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-full">
                            {/* Image */}
                            <img
                                src={cards[currentIndex].image}
                                alt={`Card ${cards[currentIndex].id}`}
                                className="w-full h-[200px] object-contain rounded-t-lg" // Ensures the full image is visible without cropping
                            /><button
                            onClick={handlePrev}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black sm:ml-0 dark:text-white p-3 rounded-full z-10 transition ease-in-out"
                        >
                            <FaChevronLeft size={30} />
                        </button>
                            <div className="p-4 text-center">

                                {/* Card Name */}
                                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                                    {cards[currentIndex].name}
                                </h3>
                                <button
                    onClick={handleNext}
                    className="absolute right-0 sm:mr-0 top-1/2 transform -translate-y-1/2 text-black dark:text-white p-3 rounded-full z-10  transition ease-in-out"
                >
                    <FaChevronRight size={30} />
                </button>
                                {/* Card Description */}
                                <p
                                    className="text-gray-800 dark:text-gray-200 mt-2 "
                                    style={{ maxWidth: 'none', minWidth: '350px' }}
                                >
                                    {cards[currentIndex].description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Next Button */}
                
            </div>

        </>
    );
};

export default CardSlider;
