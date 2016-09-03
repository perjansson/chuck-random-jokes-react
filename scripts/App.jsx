import React, {Component} from 'react';
import HtmlEntities from 'html-entities';
import ChuckJokes from './ChuchJokes';
import Counter from './Counter';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jokes: []
    };
    this.htmlEntitiesDecoder = new HtmlEntities.XmlEntities();
  }

  componentDidMount() {
    this.getRandomJoke();

    setInterval(() => {
      this.getRandomJoke();
    }, 10000);
  }

  render() {
    return (
      <div className="jokes-container">
        <ChuckJokes jokes={this.state.jokes}/>
        <Counter />
      </div>
    );
  }

  getRandomJoke() {
    $.get('https://api.icndb.com/jokes/random', data => {
      const newJokes = [
        Object.assign(data.value, {joke: this.htmlEntitiesDecoder.decode(data.value.joke)}),
        ...this.state.jokes
      ];
      this.setState({jokes: newJokes});
    });
  }

}
