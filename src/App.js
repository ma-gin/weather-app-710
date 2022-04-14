import React, { useState } from "react"
import axios from "axios"

import SearchBar from "./components/SearchBar"
import Date from "./components/Date"
import HighLow from "./components/HighLow"
import WeatherInfo from "./components/WeatherInfo"
import InfoMessage from "./components/InfoMessage"

function App() {
  const [city, setCity] = useState(undefined)
  const [data, setData] = useState(null)

  const handleInput = (e) => {
    setCity(e.target.value.toLowerCase())
  }

  const handleSearch = (e) => {
    e.preventDefault()
  }

  return (
    <div className="app">
      <SearchBar
        handleInput={handleInput}
        handleSearch={handleSearch}
        city={city}
      />
      <Date />
      <HighLow />
      <InfoMessage />
      <WeatherInfo />
      <div>{city}</div>
    </div>
  )
}

export default App
