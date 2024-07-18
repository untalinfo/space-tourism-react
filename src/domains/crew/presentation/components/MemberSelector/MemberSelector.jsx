import React from 'react';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import './MemberSelector.scss';
import { getCrew } from '../../../../../shared/application/selectors/app';

const MemberSelector = ({ handleSelectCrewMember, memberSelected }) => {
	const crew = useSelector(getCrew);
	console.log(crew);
	return (
		<div className="container-member-selector">
			{crew.map((item, index) => {
				return (
					<div
						key={index}
						className={`nav-text item-member ${item.name === memberSelected && 'selected'}`}
						onClick={() => handleSelectCrewMember(item.name)}
					>
						●
					</div>
				);
			})}
		</div>
	);
};

MemberSelector.propTypes = {
	handleSelectCrewMember: PropTypes.func.isRequired,
	memberSelected: PropTypes.string,
};

export default MemberSelector;
