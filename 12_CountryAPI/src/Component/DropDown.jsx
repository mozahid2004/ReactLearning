import React from 'react'

function DropDown() {
  return (
    <>
      <div className="dropDown-container">
        <select name="continents" id="continent-select">
          <option value="">Filter by Continent</option>
          <option value="Africa">Africa</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
        </select>
      </div>

    </>
  )
}

export default DropDown