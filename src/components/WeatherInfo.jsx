import React from "react"

function WeatherInfo({ main }) {
  return (
    <div>
      <h1>
        {Math.floor(300 - main.temp)}
        <span>°</span>
      </h1>
      <div>Feels Like {Math.floor(300 - main.feels_like)}°</div>
    </div>
  )
}

export default WeatherInfo
