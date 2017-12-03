import React from 'react';

import FaArrowCircleLeft from 'react-icons/lib/fa/arrow-circle-left';
import FaArrowCircleRight from 'react-icons/lib/fa/arrow-circle-right';
import FaTimesCircle from 'react-icons/lib/fa/times-circle';

const AlbumResultsNav = (props) => {
	if (!props.data.next && !props.data.prev) return null;

	const pageCount = Math.ceil(props.data.total / props.data.limit);
	const currentPage = (props.data.offset / props.data.limit) + 1;

	// set button display and interactivity depending on position in results
	let leftArrow;
	let rightArrow;

	if (currentPage === 1) {
		leftArrow = <FaTimesCircle className='inactive' />;
	} else {
		leftArrow = <FaArrowCircleLeft onClick={() => props.getAlbums(props.data.prev)} />
	}

	if (currentPage === pageCount) {
		rightArrow = <FaTimesCircle className='inactive' />;
	} else {
		rightArrow = <FaArrowCircleRight onClick={() => props.getAlbums(props.data.next)} />
	}

	return (
		<nav className="album-results-nav">
			{leftArrow}
			<span>{currentPage} / {pageCount}</span>
			{rightArrow}
		</nav>
	);
}

export default AlbumResultsNav;
