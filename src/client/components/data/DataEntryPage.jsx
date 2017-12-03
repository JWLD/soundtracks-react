import React from 'react';

import HeaderBar from '../../containers/data/HeaderBar';
import ArtistSearch from '../../containers/data/ArtistSearch';
import AlbumList from '../../containers/data/AlbumList';

const DataEntry = () => (
	<div className="data-page">
		<HeaderBar />
    <div>
      <ArtistSearch />
      <AlbumList />
    </div>
  </div>
);

export default DataEntry;
