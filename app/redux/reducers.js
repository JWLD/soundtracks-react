import { SET_SEARCH_TERM, SET_ARTISTS } from './actions';

const initialState = {
  searchTerm: '',
  artists: [],
};

const setSearchTerm = (state, action) => {
  return Object.assign({}, state, { searchTerm: action.payload });
};

const setArtists = (state, action) => {
  return Object.assign({}, state, { artists: action.payload });
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action);
    case SET_ARTISTS:
      return setArtists(state, action);
    default:
      return state;
  }
};

export default rootReducer;
