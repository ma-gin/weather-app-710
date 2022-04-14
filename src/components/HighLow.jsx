import React from "react"

function HighLow({ main }) {
  return (
    <div className="high-low center">
      <div>
        <span className="high">High</span> {Math.floor(300 - main.temp_min)}°C
      </div>
      <div>
        <span className="low">Low</span> {Math.floor(300 - main.temp_max)}°C
      </div>
    </div>
  )
}

export default HighLow
