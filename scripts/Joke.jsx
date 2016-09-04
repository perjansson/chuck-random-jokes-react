import React, { Component } from 'react';

export default class Joke extends Component {

  render() {
    return (
      <div className="joke animated fadeIn">
        {this.props.joke}
      </div>
    )
  }

}
