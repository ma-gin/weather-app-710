import React, { useState, useEffect } from "react"
import axios from "axios"

import Date from "./components/Date"
import HighLow from "./components/HighLow"
import WeatherInfo from "./components/WeatherInfo"
import InfoMessage from "./components/InfoMessage"

function App() {
  const [city, setCity] = useState("")
  const [data, setData] = useState(undefined)
  const [date, setDate] = useState(undefined)

  const now = new Date()
  setDate(now)

  useEffect(() => {}, [date])

  const handleInput = (e) => {
    setCity(e.target.value.toLowerCase())
  }

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      console.log(url)
      axios.get(url).then((resp) => {
        setData(resp.data)
        console.log(resp.data)
        setCity("")
      })
    }
  }

  return (
    <div className="app">
      <input
        type="text"
        value={city}
        placeholder="Enter your location..."
        onChange={(e) => handleInput(e)}
        onKeyPress={handleSearch}
      />
      <Date date={date} />
      {data && (
        <>
          <HighLow main={data.main} />
          <InfoMessage weather={data.weather[0]} />
          <WeatherInfo main={data.main} />
          <h2>{data.name}</h2>
        </>
      )}
    </div>
  )
}

export default App
