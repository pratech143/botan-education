import React from 'react'
import Country from './Country'
import countries from './Dataset'

function UK() {
  return (
    <Country countryData={countries.uk}/>
    
  )
}

export default UK;