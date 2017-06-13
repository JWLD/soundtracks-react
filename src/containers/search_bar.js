import React, { Component } from 'react';
import FaClose from 'react-icons/lib/fa/close';

class SearchBar extends Component {
  // assign initial state
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      className: 'fa fa-close page-hdr__reset page-hdr__reset_hide'
    };

    // bind onInputChange to this class
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });

    if (event.target.value) {
      this.setState({ className: 'fa fa-close page-hdr__reset' });
    } else {
      this.setState({ className: 'fa fa-close page-hdr__reset page-hdr__reset_hide' });
    }
  }

  render() {
    return (
      <div>
        <input
          className='page-hdr__input'
          value={this.state.term}
          onChange={this.onInputChange}
          placeholder='Search for Composer'
        />
        <div className='page-hdr__reset-wrap'>
          <FaClose className={this.state.className} />
        </div>
      </div>
    );
  }
};

export default SearchBar;
