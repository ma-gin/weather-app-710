import React, { useState } from "react"
import axios from "axios"

import SearchBar from "./components/SearchBar"
import WeatherInfo from "./components/WeatherInfo"
import InfoMessage from "./components/InfoMessage"
import Date from "./components/Date"

function App() {
  const [city, setCity] = useState(undefined)

  const geoUrl = `http://api.openweathermap.org/data/2.5/direct?q=${city}&appid=${process.env.REACT_APP_API_KEY}`

  return (
    <div className="app">
      <SearchBar />
      <Date />
      <WeatherInfo />
      <InfoMessage />
      <WeatherInfo />
    </div>
  )
}

export default App
