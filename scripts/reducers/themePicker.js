const defaultState = { show: false, selectedTheme: 'WHITE' };

const themePicker = (state = defaultState, action) => {
  switch (action.type) {
    case 'SHOW_THEME_PICKER':
      return Object.assign({}, state, { show: true });
    case 'HIDE_THEME_PICKER':
      return Object.assign({}, state, { show: false });
    case 'SELECT_THEME':
      return Object.assign({}, state, { selectedTheme: action.theme });
    default:
      return state;
  }
}

export default themePicker
