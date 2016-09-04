import React, {Component} from 'react';
import { connect } from 'react-redux'
import { fetchJoke, showThemePicker, selectTheme } from './actions'
import ChuckJokes from './components/ChuchJokes';
import Counter from './components/Counter';
import ThemePicker from './components/ThemePicker';

const intervalInSeconds = 10;
const showThemePickerAfterSeconds = 5;

const mapStateToProps = (state) => {
  return {
    jokes: state.jokes,
    themePicker: state.themePicker
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCountDownFinished: () => {
      dispatch(fetchJoke());
    },
    onShowThemePicker: () => {
      dispatch(showThemePicker());
    },
    onSelectTheme: theme => dispatch(selectTheme(theme))
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
        <ChuckJokes
          jokes={this.props.jokes} />
        <Counter
          onCountDownFinished={this.props.onCountDownFinished}
          value={intervalInSeconds} />
        <ThemePicker
          currentlySelectedTheme={this.props.themePicker.selectedTheme}
          onSelectTheme={this.props.onSelectTheme}
          onShowThemePicker={this.props.onShowThemePicker}
          show={this.props.themePicker.show}
          showAfterSeconds={showThemePickerAfterSeconds} />
      </div>
    );
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(App);
