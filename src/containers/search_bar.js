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
    this.onInputSubmit = this.onInputSubmit.bind(this);
    this.resetInput = this.resetInput.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });

    if (event.target.value) {
      this.setState({ className: 'fa fa-close page-hdr__reset' });
    } else {
      this.setState({ className: 'fa fa-close page-hdr__reset page-hdr__reset_hide' });
    }
  }

  onInputSubmit(event) {
    if (event.target.value && event.key === 'Enter') {
      console.log(event.target.value);
    }
  }

  resetInput() {
    this.setState({
      term: '',
      className: 'fa fa-close page-hdr__reset page-hdr__reset_hide'
    });
  }

  render() {
    return (
      <div>
        <input
          className='page-hdr__input'
          value={this.state.term}
          onChange={this.onInputChange}
          onKeyDown={this.onInputSubmit}
          placeholder='Search for Composer'
        />
        <div className='page-hdr__reset-wrap'>
          <FaClose
            className={this.state.className}
            onClick={this.resetInput}
          />
        </div>
      </div>
    );
  }
};

export default SearchBar;
