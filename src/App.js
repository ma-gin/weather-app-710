import React, { useState } from "react"
import axios from "axios"

import HighLow from "./components/HighLow"
import WeatherInfo from "./components/WeatherInfo"
import InfoMessage from "./components/InfoMessage"
import { Error } from "./components/Error"

function App() {
  const [city, setCity] = useState("")
  const [data, setData] = useState(undefined)
  const [error, setError] = useState(false)

  const date = new Date()

  const handleInput = (e) => {
    setCity(e.target.value.toLowerCase())
  }

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      axios
        .get(url)
        .then((resp) => {
          setData(resp.data)
          setCity("")
        })
        .catch((err) => {
          setError(true)
        })
    }
  }

  return (
    <div className="app">
      <div className="date">{date.toDateString()}</div>
      <input
        type="text"
        value={city}
        placeholder="Enter your location..."
        onChange={(e) => handleInput(e)}
        onKeyPress={handleSearch}
      />
      {/* <Date /> */}
      {!error && data && (
        <>
          <HighLow main={data.main} />
          <InfoMessage weather={data.weather[0]} />
          <WeatherInfo main={data.main} />
          <h2>{data.name}</h2>
        </>
      )}
      {error && <Error />}
    </div>
  )
}

export default App
