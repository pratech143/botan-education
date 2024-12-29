import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const InfiniteSlider = ({ slides }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const scrollWidth = sliderRef.current.scrollWidth;
      const currentScroll = sliderRef.current.scrollLeft;
      if (currentScroll <= 0) {
        sliderRef.current.scrollTo({
          left: scrollWidth - 1,
          behavior: 'smooth',
        });
      } else {
        sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      }
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const scrollWidth = sliderRef.current.scrollWidth;
      const clientWidth = sliderRef.current.clientWidth;
      const currentScroll = sliderRef.current.scrollLeft;
      if (currentScroll + clientWidth >= scrollWidth) {
        sliderRef.current.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
      } else {
        sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative w-full  mx-auto py-8">
      {/* "Our Services" Heading */}
      <div className="absolute left-4 top-4 text-3xl font-bold pb-6 text-gray-800 dark:text-white z-20">
        Our Services
      </div>

      {/* Card Container with Horizontal Scroll */}
      <div className="flex overflow-x-auto space-x-6 py-4 " ref={sliderRef}>
        {/* Map through slides to display them */}
        {slides.map((slide) => (
          <Link to={'/'+ slide.name} key={slide.id} className="w-[300px] bg-white dark:bg-gray-800 cursor-pointer rounded-lg shadow-lg flex-none">
            <img
              src={slide.image}
              alt={`Card ${slide.id}`}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                {slide.name}
              </h3>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                {slide.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
