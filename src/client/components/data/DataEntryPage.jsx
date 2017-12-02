import React from 'react';

import HeaderBar from './HeaderBar';
import ArtistSearch from '../../containers/data/ArtistSearch';
import AlbumList from '../../containers/data/AlbumList';

const DataEntry = () => (
	<div className="app">
		<HeaderBar />
    <div className="main">
      <ArtistSearch />
      <AlbumList />
    </div>
  </div>
);

export default DataEntry;
