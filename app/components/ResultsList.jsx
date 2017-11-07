import React, { Component } from 'react';
import { connect } from 'react-redux';

const ResultsList = (props) => {
  return (
    <ul>
      {props.results.map(result => (
        <button
          key={result.id}
          className="results-sctn__result-tile"
        >{result.name}</button>
      ))}
    </ul>
  )
};

const mapStateToProps = (state) => ({
  results: state.results
});

export default connect(mapStateToProps)(ResultsList);
