import React from "react"

function InfoMessage({ weather }) {
  return (
    <div>
      <h3>{weather.description.toUpperCase()}</h3>
    </div>
  )
}

export default InfoMessage
