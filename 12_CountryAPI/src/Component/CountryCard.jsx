import React from 'react'

function CountryCard(props) {
  // console.log(props);
  return (
    <>
      <a className="country-card" href="" >
        <img src={props.flag} alt="Barbados flag" />
        <div className="card-text">
          <h3 className="card-title">{props.name}</h3>
          <p><b>Population: </b>{props.population.toLocaleString('en-IN')}</p>
          <p><b>Region: </b>{props.region}</p>
          <p><b>Capital: </b>{props.capital}</p>
        </div>
      </a>
    </>
  )
}

export default CountryCard