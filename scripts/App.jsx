import React, {Component} from 'react';
import { connect } from 'react-redux'
import { getJoke } from './actions'
import HtmlEntities from 'html-entities';
import ChuckJokes from './ChuchJokes';
import Counter from './Counter';

const intervalInSeconds = 3;

const mapStateToProps = (state) => {
  return {
    jokes: state.jokes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCountDownFinished: () => {
      dispatch(getJoke())
    }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {

  constructor(props) {
    super(props);
    this.htmlEntitiesDecoder = new HtmlEntities.XmlEntities();
  }

  render() {
    return (
      <div className="jokes-container">
        <ChuckJokes jokes={this.props.jokes} />
        <Counter value={intervalInSeconds} onCountDownFinished={this.props.onCountDownFinished} />
      </div>
    );
  }

  /*getRandomJoke() {
    $.get('https://api.icndb.com/jokes/random', data => {
      const newJokes = [
        Object.assign(data.value, {joke: this.htmlEntitiesDecoder.decode(data.value.joke)}),
        ...this.state.jokes
      ];
      this.setState({jokes: newJokes, counter: intervalInSeconds});
    });
  }*/

}
