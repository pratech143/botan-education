import React from 'react'
import Country from './Country'
import countries from './Dataset'

function USA() {
  return (
    <Country countryData={countries.usa}/>
    
  )
}

export default USA;