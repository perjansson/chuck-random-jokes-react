import React, { Component, useEffect } from 'react'

const THEME_STYLES = {
  WHITE: 'white-theme',
  BLACK: 'black-theme',
}

const ThemePicker = ({
  show,
  selectedTheme,
  onSelectTheme,
  onTime = () => {},
  delay = 0,
}) => {
  useEffect(() => {
    const id = setTimeout(() => onTime(), delay * 1000)
    return () => clearTimeout(id)
  }, [])

  useEffect(() => {
    const otherTheme = newTheme()
    document.body.classList.remove(THEME_STYLES[otherTheme])
    document.body.classList.add(THEME_STYLES[selectedTheme])
  }, [selectedTheme])

  const newTheme = () =>
    selectedTheme === 'WHITE' ? 'BLACK' : 'WHITE'

  const toggleTheme = () => onSelectTheme(newTheme())

  return (
    show && (
      <div className="theme-picker animated bounceInUp">
        <span className="toggle" onClick={toggleTheme}>
          Change to {newTheme()} theme?
        </span>
      </div>
    )
  )
}

export default ThemePicker
