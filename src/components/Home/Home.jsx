import React from 'react';
import ImageSlider from './ImageSlider';
import StatisticsSection from './StatisticsSection';
import CardSlider from './CardSlider';
import InfiniteSlider from './InfiniteSlider';

function Home() {
  const cards = [
    { id: 1, 
      image: '/clients/Client1.jpeg',
      name:'Paritran Shakya',
      description: "Botan Education Consultancy truly exceeded my expectations. Their expertise in UK education systems and universities is outstanding. They helped me choose the perfect course and institution based on my career goals. The team was always approachable, patient, and quick to resolve any queries. Thanks to their guidance, I am now studying in one of the top universities in the UK. I highly recommend their services to anyone aspiring to study abroad!" },
    
     { id: 2,
       image: '/clients/Client2.jpeg',
       name:'Rikesh Dahal',
      description: "I had an amazing experience with Botan Education Consultancy! The team is highly professional, friendly, and genuinely dedicated to helping students achieve their dreams of studying abroad. They guided me through every step, from selecting the right university to preparing for my visa. Their personalized approach and attention to detail made the entire process stress-free. I highly recommend Botan Education Consultancy to anyone looking for expert guidance and support!" },
    
      { id: 3,
       image: '/clients/Client3.jpeg',
       name:'Pranish Shrestha', 
       description: "I had an excellent experience with Botan Education Consultancy! They provided me with comprehensive guidance for studying in the UK. The team was professional, knowledgeable, and extremely supportive throughout the entire process—from selecting the right university and course to preparing my documents and visa application. Their attention to detail and dedication made the process smooth and stress-free. I highly recommend Botan Education Consultancy to anyone planning to study in the UK!" },
    
       { id: 4,
       image: '/clients/Client4.jpeg',
       name:'Saurab Karki',
      description: "I had an exceptional experience with Botan Education Consultancy while pursuing my MD admission in China. Their team guided me through every step, from selecting the best universities to ensuring a smooth application and visa process. They provided genuine advice, handled all documentation efficiently, and were always available for queries. Thanks to their support, I am now studying in a top-tier medical university in China, with all facilities in place. Highly recommend Botan for anyone planning to study medicine abroad!" },
    
      { id: 5,
       image: '/clients/Client5.jpeg',
       name:'Luna Bhatta', 
       description: "Botan Education Consultancy has been a game changer for me. They provided detailed guidance and were available at every step of the process. Their experienced counselors ensured that I got into the perfect university for my goals. If you're looking for professionalism and success, this is the consultancy to choose!"},
  ];


  const slides = [
    { id: 1,
       image: '/clients/Careercounselling.jpg',
       name:'Career Counselling', 
       description: "Career counselling" },

    { id: 2,
       image: '/clients/Exam-guidance.jpg',
       name:'Exam Guidance',
        description: "" },

    { id: 3, 
      image: '/clients/visa.png',
      name:'Visa Processing', 
      description: "" },
  

    { id: 4,
       image: '/clients/Tuition.png',
       name:'Language Tuition', 
       description: "" }
  
  ];
  return (
    <>
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white">
        <ImageSlider />

        {/* Introduction Section */}
        <div className="max-w-7xl mx-auto px-6 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Welcome to Botan Education
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              We offer expert consultancy services to help you achieve your academic and professional goals. 
              Whether you are a student planning to study abroad or looking for career guidance, our team is here to support you every step of the way.
            </p>
          </div>
          <div className="mt-8 text-center">
            <a href="/about" className="inline-block bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition ease-in-out duration-300 dark:bg-gray-700 dark:hover:bg-gray-600">
              Read More
            </a>
          </div>
            <StatisticsSection/>
           <InfiniteSlider slides={slides}/>
           <h2 className="text-3xl font-extrabold mt-10 text-gray-900 dark:text-white sm:text-4xl flex justify-center">
            Our Students
            </h2>
            <CardSlider cards={cards} className="w-full"/>
        </div>
      </div>
    </>
  );
}

export default Home;
