import React from 'react';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import './TechnologySelector.scss';
import { getTechnologies } from '../../../../../shared/application/selectors/app';

const TechnologySelector = ({ handleSelectTechnology, technologySelected }) => {
	const crew = useSelector(getTechnologies);
	let counter = 1;
	return (
		<div className="container-technology-selector">
			{crew.map((item, index) => {
				return (
					<div
						key={index}
						className={`nav-text item-technology ${item.name === technologySelected && 'selected'}`}
						onClick={() => handleSelectTechnology(item.name)}
					>
						<h4>{counter++}</h4>
					</div>
				);
			})}
		</div>
	);
};

TechnologySelector.propTypes = {
	handleSelectTechnology: PropTypes.func.isRequired,
	technologySelected: PropTypes.string,
};

export default TechnologySelector;
