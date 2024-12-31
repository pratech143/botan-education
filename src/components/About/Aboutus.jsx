import React from 'react'
import { Link } from 'react-router-dom'
import CareerCounselling from '../Services/CareerCounselling'

function Aboutus() {
  return (
    <div className="relative  bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
      <div className="relative">
        <img className="w-full h-40 object-cover" src="/png100px/about.webp" alt="about" />
        <div className="absolute inset-0 flex items-center ">
          <h1 className="text-3xl font-bold text-gray-500 dark:text-gray-800 px-4 py-2 rounded">
          ABOUT US
          </h1>
        </div>
      </div>

      <div className="relative p-8 mt-20 text-lg flex flex-col  md:flex-row">

        <div className='lg:mr-[7vw] md:order-2 font-poppins text-gray-500 '>
          <p>
            Welcome to <span className="font-semibold">Botan Education</span>, where we specialize in providing expert guidance and support for students seeking educational opportunities abroad. We focus on connecting students with reputable institutions in destinations like Japan, Australia, the United States, New Zealand, and the United Kingdom.Our goal is to simplify the application process, assist with documentation, and offer insights into the best academic paths tailored to each student's aspirations. At Botan Education, we are dedicated to making the journey toward higher education smooth and accessible.
          </p>
          <h2 className='mt-4 mb-2 text-gray-700 dark:text-white font-semibold text-3xl'>Services we provide</h2>
          <p>Botan facilates students in every possible sectors it can for the convienence of abroad study:</p>
          <div>
            <h1 className='mt-2 text-black dark:text-white'>Career counselling:</h1>
            <p>
              We help students explore their career options and guide them in making informed decisions about their future studies and professions. Our advice aims to align their interests, skills, and goals with the right educational paths.
            </p>

            <h1 className='mt-2 text-black dark:text-white'>Language Tuition:</h1>
            <p>
              We offer language tuition to help students improve their language skills. Whether it’s preparing for exams or learning a new language, we provide personalized lessons to boost your confidence and fluency.
            </p>

            <h1 className='mt-2 text-black dark:text-white'>Exam Guidance:</h1>
            <p>We assist students in preparing for important exams by offering tips, study strategies, and practice materials. Our aim is to help students feel well-prepared and confident on exam day.</p>

            <h1 className='mt-2 text-black dark:text-white'>Visa processing:</h1>
            <p>
              We guide students through the visa application process, ensuring they meet all the necessary requirements for studying abroad. From paperwork to submission, we simplify the process and help students obtain their study visas without hassle.
            </p>
            <div>
  <h1 className='flex justify-center mt-6 mb-3 text-black dark:text-white text-3xl font-semibold'>Meet our Team Members</h1>
  <div className='flex flex-col md:flex-row md:flex-wrap items-center justify-center space-y-8 md:space-y-0 md:space-x-16'>
    
    <div className='flex flex-col items-center'>
      <div className='bg-blue-600 rounded-full w-36 h-36 flex items-center justify-center'>
      <img className='rounded-full w-36 h-36 flex items-center justify-center object-cover' src="/owners/ganesh.jpg" alt="ganesh dhakal" />
      </div>
      <p className='mt-4 font-semibold text-lg text-gray-700 dark:text-gray-300'>Ganesh Dhakal</p>
      <p className='mt-1 font-semibold text-lg text-gray-700 dark:text-gray-300'>Phone No: 9840044318</p>
    </div>


    <div className='flex flex-col items-center'>
      <div className='bg-blue-600 rounded-full w-36 h-36 flex items-center justify-center'>
      <img className='rounded-full w-36 h-36 flex items-center justify-center object-cover' src="/owners/deepak.jpg" alt="ganesh dhakal" />
      </div>
      <p className='mt-4 font-semibold text-lg text-gray-700 dark:text-gray-300'>Deepak Bhusal</p>
      <p className='mt-1 font-semibold text-lg text-gray-700 dark:text-gray-300'>Phone No: 9741811473</p>
    </div>

  </div>
</div>

          </div>
        </div>
        <div className=' relative mr-2 border-t-2 md:border-r-2 md:border-t-0 md:w-[117rem] md:order-1 font-poppins flex flex-col items-center'>
          <h3 className='font-semibold text-3xl'>Our Services</h3>
          <ul className='list-none mt-4'>
            <li className='p-1'>
              <Link to="/Career Counselling" className='hover:text-orange-600 text-gray-600'>Career Counselling</Link>
            </li>
            <li className='p-1'>
              <Link to="/Language Tuition" className='hover:text-orange-600 text-gray-600'>Language Tuition</Link>
            </li>
            <li className='p-1'>
              <Link to="/Exam Guidance" className='hover:text-orange-600 text-gray-600'>Exam Guidance</Link>
            </li>
            <li className='p-1'>
              <Link to="/Visa Processing"className='hover:text-orange-600 text-gray-600'>Visa Processing</Link>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default Aboutus
