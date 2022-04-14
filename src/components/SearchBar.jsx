import React, { useState } from "react"
import { GrSearch } from "react-icons/gr"

function SearchBar(city, handleInput, handleSearch) {
  const geoUrl = `http://api.openweathermap.org/data/2.5/direct?q=${city}&appid=${process.env.REACT_APP_API_KEY}`

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Enter your location..."
        onChange={(e) => handleInput(e)}
      />
      <button type="submit">
        <GrSearch />
      </button>
    </form>
  )
}

export default SearchBar
