import React, {Component} from 'react';
import { connect } from 'react-redux'
import { fetchJoke } from './actions'
import ChuckJokes from './ChuchJokes';
import Counter from './Counter';

const intervalInSeconds = 10;

const mapStateToProps = (state) => {
  return {
    jokes: state.jokes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCountDownFinished: () => {
      dispatch(fetchJoke());
    }
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.props.onCountDownFinished();
  }

  render() {
    return (
      <div className="jokes-container">
        <ChuckJokes jokes={this.props.jokes} />
        <Counter value={intervalInSeconds} onCountDownFinished={this.props.onCountDownFinished} />
      </div>
    );
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(App);
