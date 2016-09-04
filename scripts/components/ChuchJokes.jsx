import React, { Component } from 'react';
import Joke from './Joke';

export default class ChuckJokes extends Component {

  constructor(props) {
    super(props);
  }

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
