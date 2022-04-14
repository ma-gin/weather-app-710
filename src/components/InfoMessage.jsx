import React from "react"

function InfoMessage({ weather }) {
  return (
    <div>
      <div>{weather.description}</div>
    </div>
  )
}

export default InfoMessage
