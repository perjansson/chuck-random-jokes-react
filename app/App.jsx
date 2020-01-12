import React, { Component, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

import { fetchJoke } from './jokes/actions'

import Counter from './components/Counter'
import JokesList from './jokes/JokesList'
import ThemePicker from './theme/ThemePicker'
import {
  selectTheme,
  showThemePicker,
} from './theme/reducer'

const RELOAD_JOKE_INTERVAL_IN_SECONDS = 10
const SHOW_THEME_PICKER_AFTER_SECONDS = 5

const App = ({ jokes, loading, theme }) => {
  const dispatch = useDispatch()

  const getNewJoke = () => dispatch(fetchJoke())

  useEffect(() => {
    getNewJoke()
  }, [])

  return (
    <div className="jokes-container">
      <JokesList jokes={jokes} />
      <Counter
        startValue={RELOAD_JOKE_INTERVAL_IN_SECONDS}
        onTime={getNewJoke}
        disabled={loading}
      />
      <ThemePicker
        selectedTheme={theme.selectedTheme}
        onSelectTheme={theme =>
          dispatch(selectTheme(theme))
        }
        onTime={() => dispatch(showThemePicker())}
        show={theme.show}
        delay={SHOW_THEME_PICKER_AFTER_SECONDS}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  jokes: state.jokes.jokeList,
  loading: state.jokes.loading,
  theme: state.theme,
})

export default connect(mapStateToProps)(App)
