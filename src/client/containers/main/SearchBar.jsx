import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import FaTimesCircle from 'react-icons/lib/fa/times-circle';
import FaPlus from 'react-icons/lib/fa/plus';

import { setSearchTerm, setResults } from '../../redux/actions';

const SearchBar = (props) => {
  const resetBtnClass = props.searchTerm ? 'search-bar__reset-btn' : 'hide';

  return (
    <header className="search-bar">
			<div>
				<input
					className="search-bar__input"
					value={props.searchTerm}
					onChange={props.onSearchTermChange}
					placeholder="Search"
				/>
				<FaTimesCircle
					className={resetBtnClass}
					onClick={props.clearSearch}
				/>
			</div>
			<a className="search-bar__data-link" href="/add"><FaPlus /></a>
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
