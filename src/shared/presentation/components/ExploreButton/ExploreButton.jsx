import React from 'react';
import { PropTypes } from 'prop-types';
import './ExploreButton.scss';

const ExploreButton = ({ handleClick }) => {
	return (
		<button className="heading-S explore-button-container" onClick={handleClick}>
			EXPLORE
		</button>
	);
};

ExploreButton.propTypes = {
	handleClick: PropTypes.func.isRequired,
};

export default ExploreButton;
