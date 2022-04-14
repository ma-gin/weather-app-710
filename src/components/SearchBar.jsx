import React from "react"

function SearchBar(city, handleInput, handleSearch) {
  return (
    <input
      type="text"
      value={city}
      placeholder="Enter your location..."
      onChange={(e) => handleInput(e)}
      onKeyPress={handleSearch}
    />
  )
}

export default SearchBar
