import React, { Component } from 'react';

export default class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: props.value
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.updateCounter();
    }, 1000);
  }

  updateCounter() {
    this.setState({counter: (this.state.counter <= 1) ? 0 : this.state.counter - 1});
    if (this.state.counter === 0) {
      this.props.onCountDownFinished();
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({counter: nextProps.value});
  }

  render() {
    return (
      <div className="counter animated zoomIn">
        {this.state.counter}
      </div>
    )
  }

}
