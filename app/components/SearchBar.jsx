import React, { Component } from 'react';
import FaClose from 'react-icons/lib/fa/close';
import { connect } from 'react-redux';
import Axios from 'axios';

import { setSearchTerm, setResults } from '../redux/actions';

const SearchBar = (props) => {
  const iconClass = props.searchTerm ? 'page-hdr__reset-btn' : 'hide';

  return (
    <header className='page-hdr'>
      <input
        className='page-hdr__input'
        value={props.searchTerm}
        onChange={props.onSearchTermChange}
        placeholder='Filter'
      />
      <div className='page-hdr__reset-wrap'>
        <FaClose
          className={iconClass}
          onClick={props.clearSearch}
        />
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = (dispatch) => ({
  onSearchTermChange: (event) => {
    dispatch(setSearchTerm(event.target.value));
  },

  clearSearch: () => {
    dispatch(setSearchTerm(''));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
