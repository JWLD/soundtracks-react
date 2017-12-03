import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import FaDownload from 'react-icons/lib/fa/download';
import FaExternalLinkSquare from 'react-icons/lib/fa/external-link-square';
import FaPlus from 'react-icons/lib/fa/plus';
import FaMinus from 'react-icons/lib/fa/minus'

import titleData from '../../data/titlePhrases';

class AlbumTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.trimTitles(props.name),
      year: '',
			added: this.props.added
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.getAlbumDate = this.getAlbumDate.bind(this);
    this.addAlbum = this.addAlbum.bind(this);
		this.deleteAlbum = this.deleteAlbum.bind(this);
  }

  trimTitles(title) {
    const regexArray = titleData.map(phrase => `:?-? \\(?${phrase}\\)?`);
    const regex = new RegExp(regexArray.join('|'), 'gi');
    return title.replace(regex, '');
  }

  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  getAlbumDate() {
    Axios.get(`/api/sp-album-date?albumId=${this.props.id}`, { withCredentials: true })
      .then(response => {
        this.setState({ year: response.data });
      })
      .catch(err => {
				return console.log(err.response.data || err);
      });
  }

  addAlbum() {
    const data = {
      title: this.state.title,
      year: this.state.year,
      album_id: this.props.id,
      spotify_img: this.props.albumArt,
      artist_id: this.props.artist
    }

    Axios.post('/api/db-albums', data)
      .then((response) => {
				this.setState({ added: true });

        return console.log(response.data);
      })
      .catch((err) => {
				return console.log(err.response.data || err);
      });
  }

	deleteAlbum() {
		Axios.delete('/api/db-albums', { params: { album_id: this.props.id } })
			.then((response) => {
				this.setState({ added: false });

				return console.log(response.data);
			})
			.catch((err) => {
				return console.log(err.response.data || err);
			});
	}

  render () {
    let yearButton;

    if (this.state.year) {
      const title = encodeURIComponent(this.state.title);
      yearButton = <a className="album-panel__year-btn" href={`http://www.imdb.com/find?q=${title}`} target="_blank"><FaExternalLinkSquare /></a>
    } else {
      yearButton = <a className="album-panel__year-btn"><FaDownload onClick={this.getAlbumDate} /></a>;
    }

    const imgStyle = { backgroundImage: `url(${this.props.albumArt})` };
		const panelClass = this.state.added ? 'album-panel added' : 'album-panel';
		const plusClass = !this.state.year ? 'inactive tile' : '';

		const dbButton = this.state.added
			? <FaMinus onClick={this.deleteAlbum} />
			: <FaPlus className={plusClass} onClick={this.addAlbum} />;

    return (
      <li>
        <div className={panelClass}>
          <a
            className="album-panel__img-link"
            style={imgStyle}
            href={this.props.external_urls.spotify}
            target="_blank">
          </a>
          <div className="album-panel__input-wrap">
            <input name="title" onChange={this.onInputChange} value={this.state.title} />
            <div>
              <input name="year" onChange={this.onInputChange} value={this.state.year} placeholder="Year" />
              {yearButton}
            </div>
            <div className="album-panel__db-btn">
							{dbButton}
            </div>
          </div>
        </div>
      </li>
    )
  }
};

const mapStateToProps = (state) => ({
  artist: state.artist
});

export default connect(mapStateToProps)(AlbumTile);
