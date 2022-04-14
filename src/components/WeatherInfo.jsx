import React from "react"

function WeatherInfo({ main }) {
  return (
    <div>
      <h1 className="center">
        {Math.floor(300 - main.temp)}
        <span>°</span>
      </h1>
    </div>
  )
}

export default WeatherInfo
