import { SET_SEARCH_TERM, SET_ARTIST, TOGGLE_AUTH_WARNING } from './actions';

const initialState = {
  searchTerm: '',
	artist: null,
	authWarning: false
};

const setSearchTerm = (state, action) => {
  return Object.assign({}, state, { searchTerm: action.payload });
};

const setArtist = (state, action) => {
  return Object.assign({}, state, { artist: action.payload });
};

const toggleAuthWarning = (state) => {
  return Object.assign({}, state, { authWarning: !state.authWarning });
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action);
		case SET_ARTIST:
    	return setArtist(state, action);
		case TOGGLE_AUTH_WARNING:
			return toggleAuthWarning(state);
    default:
      return state;
  }
};

export default rootReducer;
