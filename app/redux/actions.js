// ACTION TYPES

export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_RESULTS = 'SET_RESULTS';


// ACTION CREATORS

export function setSearchTerm(searchTerm) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm
  };
}

export function setResults(response) {
  return {
    type: SET_RESULTS,
    payload: response
  }
}
