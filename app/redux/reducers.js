import { SET_SEARCH_TERM, SET_RESULTS } from './actions';

const initialState = {
  searchTerm: '',
  resultType: '',
  results: [],
};

const setSearchTerm = (state, action) => {
  return Object.assign({}, state, { searchTerm: action.payload });
};

const setResults = (state, action) => {
  return Object.assign({}, state, { resultType: action.payload.type, results: action.payload.data });
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action);
    case SET_RESULTS:
      return setResults(state, action);
    default:
      return state;
  }
};

export default rootReducer;
