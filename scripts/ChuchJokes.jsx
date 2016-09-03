import React, { Component } from 'react';
import Joke from './Joke';

export default class ChuckJokes extends Component {

  render() {
    return (
      <div>
          {this.props.jokes.map(joke =>
            <Joke {...joke} key={joke.id} />
          )}
      </div>
    )
  }

}
