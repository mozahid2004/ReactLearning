import React from 'react'
import CountriesData from '../CountriesData/CountriesData'
import CountryCard from './CountryCard';

function CountiesContainer() {

  const array = CountriesData.map((country) =>{
    return <CountryCard 
    name={country.name.common} 
    flag={country.flags.svg}
    population={country.population}
    region={country.region}
    capital={country.capital}
    key={country.name.common}
    />
  })
  return (
    <>
      <div className="country-container">{array}</div>
    </>
  )
}

export default CountiesContainer