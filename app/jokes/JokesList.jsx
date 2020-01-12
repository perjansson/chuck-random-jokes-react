import React from 'react'
import Joke from './Joke'

const JokesList = ({ jokes }) =>
  jokes.map(joke => <Joke {...joke} key={joke.id} />)

export default JokesList
