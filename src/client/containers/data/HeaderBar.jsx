import React, { Component } from 'react';
import { connect } from 'react-redux';
import FaSpotify from 'react-icons/lib/fa/spotify';

class DataHeader extends Component {
	render() {
		const spotifyLinkClass = this.props.authWarning
			? 'header-bar__spotify-btn danger'
			: 'header-bar__spotify-btn';

		return (
			<header className="header-bar">
				<h1 className="header-bar__title">Spotify Data</h1>
				<a className={spotifyLinkClass} href="/api/login">
					<FaSpotify />
				</a>
			</header>
		);
	}
};


const mapStateToProps = (state) => ({
	authWarning: state.authWarning
});

export default connect(mapStateToProps)(DataHeader);
