import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Corrected import for react-router-dom

const images = [
  { name: "United Kingdom", src: "/countries/UK.jpg", text: "Study in UK", description: "The UK offers a prestigious academic experience with globally respected qualifications and a rich cultural environment that prepares students for international success." },
  { name: "Japan", src: "/countries/japan.jpeg", text: "Study in Japan", description: "Studying in Japan allows you to benefit from a prestigious education system, gain exposure to advanced technology and research, and immerse yourself in a vibrant culture that values tradition and innovation." },
  { name: "USA", src: "/countries/america.webp", text: "Study in USA", description: "The USA is a hub for academic excellence and innovation, offering flexible programs and hands-on opportunities that attract students worldwide seeking diverse career paths." },
  
  { name: "Australia", src: "/countries/australia.jpg", text: "Study in Australia", description: "Australia provides a high-quality education system in a multicultural and welcoming environment, emphasizing practical learning and strong post-study work opportunities." },
  { name: "Newzealand", src: "/countries/newzealand.jpg", text: "Study in New Zealand", description: "New Zealand combines top-tier education with a supportive, adventurous environment, where students can enjoy global-quality learning and career-ready skills." }
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
      setTextAnimation(true); // Trigger text animation
    }, 100);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[37rem] overflow-hidden">
      <div
        className="w-full h-full flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
  <div className="relative flex-shrink-0 w-full h-full" key={index}>
    <img
      src={image.src}
      alt={`${image.name}`}
      className="w-full h-full object-cover"
    />
    <div className="hidden lg:block absolute inset-0 flex-col items-center justify-center">
      <div className={`absolute top-1/4 opacity-0 font-semibold uppercase font-poppins outline-none text-7xl w-full text-orange-600 p-4 rounded-lg 
        ${textAnimation ? 'animate-slide-up-fade-in' : 'opacity-100'}`}>
        {image.text}
      </div>
      <div className={`absolute top-[40%] left-[30px] opacity-0 font-semibold font-poppins outline-none text-sm bg-blue-600 bg-opacity-35 text-black p-4 rounded-lg w-1/2
        ${textAnimation ? 'animate-slide-up-fade-in' : 'opacity-100'}`}>
        {image.description}
      </div>
      <Link to="/contact">
        <button className={`absolute top-[60%] left-[5%] font-medium font-poppins text-sm w-[10%] p-4 rounded-lg 
         text-white border-2 border-white  hover:border-slate-300
          ${textAnimation ? 'animate-slide-up-fade-in' : 'opacity-100'}`}>
          Contact us &gt;
        </button>
      </Link>
      <Link to={`/${image.name}`}>
        <button className={`absolute top-[60%] left-[20%] font-medium font-poppins text-sm w-[10%] p-4 rounded-lg 
         text-white  bg-blue-500 hover:bg-blue-400 
          ${textAnimation ? 'animate-slide-up-fade-in' : 'opacity-100'}`}>
          Read More &gt;
        </button>
      </Link>
    </div>
  </div>
))}

      </div>

      <button
        onClick={handlePrev}
        className="absolute left-0 h-10 w-15 top-1/2 transform -translate-y-1/2 bg-orange-400 text-black p-2  hover:bg-orange-800 cursor-pointer"
      >
        <span className='relative font-bold w-8 justify-center items-center'>《</span>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 h-10 w-15 top-1/2 transform -translate-y-1/2 bg-orange-400 text-black p-2  hover:bg-orange-800 cursor-pointer"
      >
        <span className='relative font-bold w-8 justify-center items-center'> 》</span>
      </button>
    </div>
  );
}

export default ImageSlider;
