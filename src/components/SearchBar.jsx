import React from "react"
import { GrSearch } from "react-icons/gr"

function SearchBar({ handleInput, handleSearch }) {
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
