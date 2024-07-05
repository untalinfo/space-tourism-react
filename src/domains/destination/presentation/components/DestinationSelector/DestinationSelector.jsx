import React from 'react';
import { PropTypes } from 'prop-types';
import { DESTINATIONS_LIST } from '../../../application/constants/destination';
import './DestinationSelector.scss';

const DestinationSelector = ({ handleSelectDestination, destinationSelected }) => {
	return (
		<div className="container-destination-selector">
			{DESTINATIONS_LIST.map((item, index) => {
				return (
					<div
						key={index}
						className={`nav-text item-destination ${item.value === destinationSelected && 'selected'}`}
						onClick={() => handleSelectDestination(item.value)}
					>
						{item.name}
					</div>
				);
			})}
		</div>
	);
};

DestinationSelector.propTypes = {
	handleSelectDestination: PropTypes.func.isRequired,
	destinationSelected: PropTypes.string,
};

export default DestinationSelector;
