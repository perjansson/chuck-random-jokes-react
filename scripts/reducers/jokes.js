const defaultJokes = [{ id: 1, joke: 'Joke 1...' }];

const jokes = (state = defaultJokes, action) => {
  switch (action.type) {
    case 'RECEIVE_JOKE':
      const newJokes = [{ id: state.length + 1, joke: `Joke ${state.length + 1}...` },
        ...state
      ];
      return newJokes;
    default:
      return state
  }
}

export default jokes
