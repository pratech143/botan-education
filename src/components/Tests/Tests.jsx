import React from 'react'

function Tests({ TestData }) {
  return (
    <div className="relative bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
      <div className="relative">
        <img className="w-full h-40 object-cover" src={TestData.image} alt={TestData.title} />
        <div className="absolute inset-0 flex items-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-800 px-4 py-2 rounded">
            {TestData.title}:{TestData.fullForm}
          </h1>
        </div>
      </div>
      <div className='font-poppins m-12 mb-0'>
        <h1 className='mb-6 font-bold'>About {TestData.title}</h1>
      <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
          {TestData.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        </div>
      

    
      </div>
    
  )
}

export default Tests;
