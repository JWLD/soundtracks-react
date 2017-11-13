// ACTION TYPES

export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_ARTISTS = 'SET_ARISTS';

// ACTION CREATORS

export function setSearchTerm(searchTerm) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm
  };
}

export function setArtists(artists) {
  return {
    type: SET_ARTISTS,
    payload: artists
  }
}
