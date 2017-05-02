import React, { Component } from 'react';

class SearchBar extends Component {
  // assign initial state
  constructor(props) {
    super(props);

    this.state = { term: '' };

    // bind onInputChange to this class
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <input
        className="page-hdr__input"
        value={this.state.term}
        onChange={this.onInputChange}
        placeholder="Search for Composer"
      />
    );
  }
};

export default SearchBar;
