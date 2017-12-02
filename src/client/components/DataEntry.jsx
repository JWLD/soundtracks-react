import React from 'react';

import DataHeader from './DataHeader';
import ArtistSearch from '../containers/ArtistSearch';
import DataAlbumList from '../containers/DataAlbumList';

const DataEntry = () => (
	<div className="app">
		<DataHeader />
    <div className="main">
      <ArtistSearch />
      <DataAlbumList />
    </div>
  </div>
);

export default DataEntry;
