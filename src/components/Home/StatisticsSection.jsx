import React, { useState, useEffect, useRef } from 'react';

function StatisticsSection({ threshold = 0.5 }) {
  const [inView, setInView] = useState(false);
  const [countriesCount, setCountriesCount] = useState(0);
  const [universitiesCount, setUniversitiesCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold } // Trigger when a certain percentage of the component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold]);

  useEffect(() => {
    if (inView) {
      const countriesInterval = setInterval(() => {
        setCountriesCount((prevCount) => {
          if (prevCount < 10) {
            return prevCount + 1;
          } else {
            clearInterval(countriesInterval);
            return prevCount;
          }
        });
      }, 300);

      const universitiesInterval = setInterval(() => {
        setUniversitiesCount((prevCount) => {
          if (prevCount < 200) {
            return prevCount + 4; // Increment faster to reach 200
          } else {
            clearInterval(universitiesInterval);
            return prevCount;
          }
        });
      }, 50);

      const yearsInterval = setInterval(() => {
        setYearsCount((prevCount) => {
          if (prevCount < 2) {
            return prevCount + 1;
          } else {
            clearInterval(yearsInterval);
            return prevCount;
          }
        });
      }, 600);

      return () => {
        clearInterval(countriesInterval);
        clearInterval(universitiesInterval);
        clearInterval(yearsInterval);
      };
    }
  }, [inView]);

  return (
    <div
      ref={sectionRef}
      className="mt-8 text-center dark:bg-gray-800 flex flex-col sm:flex-row justify-around"
    >
      <div className="mb-4 sm:mb-0">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Partnered in</h3>
        <p className="text-4xl font-bold text-orange-700 dark:text-orange-500 mt-2">
          {countriesCount}+
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">Countries</p>
      </div>

      <div className="mb-4 sm:mb-0">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Partnered with</h3>
        <p className="text-4xl font-bold text-orange-700 dark:text-orange-500 mt-2">
          {universitiesCount}+
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">Universities</p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Working for</h3>
        <p className="text-4xl font-bold text-orange-700 dark:text-orange-500 mt-2">
          {yearsCount}+
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">Years</p>
      </div>
    </div>
  );
}

export default StatisticsSection;
