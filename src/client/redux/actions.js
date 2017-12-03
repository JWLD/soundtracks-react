// ACTION TYPES

export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_ARTIST = 'SET_ARTIST';

// ACTION CREATORS

export function setSearchTerm(searchTerm) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm
  };
}

export function setArtist(artistInfo) {
  return {
    type: SET_ARTIST,
    payload: artistInfo
  };
}
