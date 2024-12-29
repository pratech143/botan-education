import React from 'react'
import { Link } from 'react-router-dom'
function Country({ countryData }) {
  return (
    <div className="relative bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
      <div className="relative">
        <img className="w-full h-40 object-cover" src={countryData.image} alt={countryData.title} />
        <div className="absolute inset-0 flex items-center">
          <h1 className="text-3xl font-bold text-black dark:text-gray-800 px-4 py-2 rounded">
            {countryData.title}
          </h1>
        </div>
      </div>

      <div className="relative p-8 mt-20 text-lg flex flex-col md:flex-row">
        <div className='lg:mr-[7vw] md:order-2 font-poppins text-gray-500'>
          <p>{countryData.intro}</p>

          <h2 className='mt-4 mb-2 text-gray-700 dark:text-white font-semibold text-3xl'>Why Choose {countryData.title.split(' ')[2]}</h2>
          <p>{countryData.title} is a top choice for students due to its world-class universities, diverse student community, and high standard of living. Some of the reasons why {countryData.title.split(' ')[2]} stands out include:</p>

          <div>
            {countryData.reasons.map((reason, index) => (
              <div key={index}>
                <h1 className='mt-2 text-black dark:text-white'>{reason.title}</h1>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='relative mr-2 border-t-2 md:border-r-2 md:border-t-0 md:w-[117rem] md:order-1 font-poppins flex flex-col items-center'>
          <h3 className='font-semibold text-3xl'>Our Services</h3>
          <ul className='list-none mt-4'>
            {countryData.services.map((service, index) => (
              <li className='p-1' key={index}>
                <Link to={'/'+service} className='hover:text-orange-600 text-gray-600'>{service}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
{countryData.universityPartners &&   <div>
        <h1 className='flex justify-center mt-6 text-black dark:text-white text-3xl font-semibold'>University Partners</h1>
        <div className='flex flex-col md:flex-row md:flex-wrap items-center justify-center mt-8 space-y-8 md:space-y-0 md:space-x-16'>
          {countryData.universityPartners.map((partner, index) => (
            <div key={index} className='flex flex-col items-center'>
              <div className=' rounded-full w-36 h-36 flex items-center justify-center'>
                <img src={partner.logo} alt={partner.name} className='rounded-full w-28 h-28 object-cover' />
              </div>
              <p className='mt-4 font-semibold text-lg text-gray-700 dark:text-gray-300'>{partner.name}</p>
            </div>
          ))}
        </div>
      </div>}
    
    </div>
  )
}

export default Country;
