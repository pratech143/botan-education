import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { 
    name: "United Kingdom", 
    src: "/countries/UK.jpg", 
    text: "Study in UK", 
    description: "The UK offers a prestigious academic experience with globally respected qualifications and a rich cultural environment that prepares students for international success."
  },
  { 
    name: "Japan", 
    src: "/countries/japan.jpeg", 
    text: "Study in Japan", 
    description: "Studying in Japan allows you to benefit from a prestigious education system, gain exposure to advanced technology and research, and immerse yourself in a vibrant culture that values tradition and innovation."
  },
  { 
    name: "USA", 
    src: "/countries/america.webp", 
    text: "Study in USA", 
    description: "The USA is a hub for academic excellence and innovation, offering flexible programs and hands-on opportunities that attract students worldwide seeking diverse career paths."
  },
  { 
    name: "Australia", 
    src: "/countries/australia.jpg", 
    text: "Study in Australia", 
    description: "Australia provides a high-quality education system in a multicultural and welcoming environment, emphasizing practical learning and strong post-study work opportunities."
  },
  { 
    name: "Newzealand", 
    src: "/countries/newzealand.jpg", 
    text: "Study in New Zealand", 
    description: "New Zealand combines top-tier education with a supportive, adventurous environment, where students can enjoy global-quality learning and career-ready skills."
  }
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textAnimation, setTextAnimation] = useState(true);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    setTextAnimation(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    setTextAnimation(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setTextAnimation(true);
    }, 100);

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[37rem] overflow-hidden">
      <div
        className="w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="relative flex-shrink-0 w-full h-full" key={index}>
            <div className="absolute inset-0 bg-black/30 z-10" /> {/* Overlay */}
            <img
              src={image.src}
              alt={image.name}
              className="w-full h-full object-cover transform scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 z-20 flex flex-col items-start justify-center px-12 lg:px-24">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: textAnimation ? 1 : 0, y: textAnimation ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold text-white mb-6"
              >
                {image.text}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: textAnimation ? 1 : 0, y: textAnimation ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg lg:text-xl text-white max-w-2xl mb-8 leading-relaxed"
              >
                {image.description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: textAnimation ? 1 : 0, y: textAnimation ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex gap-4"
              >
                <Link to="/contact">
                  <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
                    Contact us
                  </button>
                </Link>
                <Link to={`/${image.name}`}>
                  <button className="px-8 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transform hover:scale-105 transition-all duration-300">
                    Learn More
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-30"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-30"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;