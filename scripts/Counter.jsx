import React, { Component } from 'react';

export default class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 10
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.updateCounter();
    }, 1000);
  }

  updateCounter() {
    this.setState({counter: (this.state.counter === 1) ? 10 : this.state.counter - 1});
  }

  render() {
    return (
      <div className="counter animated bounceInDown">
        {this.state.counter}
      </div>
    )
  }

}
