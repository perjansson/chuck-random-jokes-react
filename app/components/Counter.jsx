import React, { useState, useEffect } from 'react'

const Counter = ({ startValue, onTime, disabled }) => {
  const [counter, setCounter] = useState(startValue)

  const updateCounter = () =>
    setCounter(c => (c <= 1 ? 0 : c - 1))

  useEffect(() => {
    if (!disabled) {
      if (counter === 0) {
        setCounter(startValue)
      }
      const id = setInterval(updateCounter, 1000)
      return () => clearInterval(id)
    }
  }, [disabled])

  useEffect(() => {
    if (counter === 0) {
      onTime()
    }
  }, [counter])

  return (
    <div className="counter animated zoomIn">{counter}</div>
  )
}

export default Counter
