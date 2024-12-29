import React from 'react'
import { Link } from 'react-router-dom'
function Services({ serviceData }) {
  return (
    <div className="relative bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
      <div className="relative">
        <img className="w-full h-40 object-cover" src={serviceData.image} alt={serviceData.title} />
        <div className="absolute inset-0 flex items-center">
          <h1 className="text-3xl font-bold text-black dark:text-gray-800 px-4 py-2 rounded">
            {serviceData.title}
          </h1>
        </div>
      </div>

      <div className="relative p-8 mt-20 text-lg flex flex-col md:flex-row">
        <div className='lg:mr-[7vw] md:order-2 font-poppins text-gray-500'>
          <p>{serviceData.intro}</p>

          <h2 className='mt-4 mb-2 text-gray-700 dark:text-white font-semibold text-3xl'>What is {serviceData.title}</h2>
          
          <div>{serviceData.description}</div>
        </div>

        
      </div>

     
     
    </div>
  )
}

export default Services;
