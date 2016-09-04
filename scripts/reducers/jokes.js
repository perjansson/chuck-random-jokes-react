const jokes = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_JOKE':
      const newJokes = [action.joke,
        ...state
      ];
      return newJokes;
    default:
      return state
  }
}

export default jokes
