// ACTION TYPES

export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';

// ACTION CREATORS

export function setSearchTerm(searchTerm) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm
  };
}
