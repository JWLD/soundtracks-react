import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import SearchBar from '../components/SearchBar';
// import ResultsList from '../components/ResultsList';
// import { setSearchTerm } from '../redux/actions';

const Landing = () => (
  <div>
    <header className="page-hdr">
      <SearchBar />
    </header>
  </div>
);

export default Landing;

// export class Landing extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       results: [],
//       category: ''
//     };
//
//     this.searchArtists = this.searchArtists.bind(this);
//     this.getAlbums = this.getAlbums.bind(this);
//     this.clearResults = this.clearResults.bind(this);
//   };
//
//   componentDidMount() {
//     this.searchArtists('');
//   }
//
//   searchArtists(term) {
//     const request = Axios.get(`/api/artists?q=${term}`);
//
//     request.catch((error) => {
//       console.log(error);
//     });
//
//     request.then((response) => {
//       this.setState({
//         results: response.data,
//         category: 'artists'
//       });
//     });
//   };
//
//   getAlbums(artist) {
//     const request = Axios.get(`/api/albums?q=${artist.discogs_id}`);
//
//     request.catch((error) => {
//       console.log(error);
//     });
//
//     request.then((response) => {
//       console.log(response.data);
//       this.setState({
//         results: response.data,
//         category: 'albums'
//       });
//     });
//   };
//
//   clearResults() {
//     this.setState({
//       results: []
//     });
//   };
//
//   render() {
//     return (
//       <div>heyo
//         <header className="page-hdr">
//           <SearchBar />
//         </header> */}
//         <section className="results-sctn">
//           <ResultsList results={this.state.results} getAlbums={this.getAlbums} category={this.state.category}/>
//         </section>
//       </div>
//     );
//   };
// };
