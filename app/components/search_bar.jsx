import React, { Component } from 'react';
import FaClose from 'react-icons/lib/fa/close';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      className: 'fa fa-close page-hdr__reset page-hdr__reset_hide'
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.resetInput = this.resetInput.bind(this);
  };

  onInputChange(term) {
    this.setState({ term });

    if (term) {
      this.setState({ className: 'fa fa-close page-hdr__reset' });
    } else {
      this.setState({ className: 'fa fa-close page-hdr__reset page-hdr__reset_hide' });
    }

    this.props.onSearchTermChange(term);
  };

  resetInput() {
    this.setState({
      term: '',
      className: 'fa fa-close page-hdr__reset page-hdr__reset_hide'
    });

    this.props.clearResults();
  };

  render() {
    return (
      <div>
        <input
          className='page-hdr__input'
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)}
          placeholder='Search'
        />
        <div className='page-hdr__reset-wrap'>
          <FaClose
            className={this.state.className}
            onClick={this.resetInput}
          />
        </div>
      </div>
    );
  };
};
