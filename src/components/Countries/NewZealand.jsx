import React from 'react'
import Country from './Country'
import countries from './Dataset'
function NewZealand() {
  return (
    <Country countryData={countries.newzealand}/>
  )
}

export default NewZealand