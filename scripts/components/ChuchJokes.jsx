import React, { Component } from 'react';
import Joke from './Joke';

export default props => <div>{props.jokes.map(joke => <Joke {...joke} key={joke.id} />)}</div>
