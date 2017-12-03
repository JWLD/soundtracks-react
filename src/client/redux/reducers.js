import { SET_SEARCH_TERM, SET_ARTIST } from './actions';

const initialState = {
  searchTerm: '',
	artist: null
};

const setSearchTerm = (state, action) => {
  return Object.assign({}, state, { searchTerm: action.payload });
};

const setArtist = (state, action) => {
  return Object.assign({}, state, { artist: action.payload });
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action);
		case SET_ARTIST:
    	return setArtist(state, action);
    default:
      return state;
  }
};

export default rootReducer;
