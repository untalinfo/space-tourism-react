import React, { useState } from 'react';
import './CrewPage.scss';
import { useSelector } from 'react-redux';
import { getCrewMember } from '../../../../shared/application/selectors/app';
import MemberSelector from '../components/MemberSelector/MemberSelector';

const CrewPage = () => {
	const [memberSelected, setMemberSelected] = useState('Douglas Hurley');
	const crewMember = useSelector(getCrewMember(memberSelected));

	const handleSelectCrewMember = (memberName) => {
		setMemberSelected(memberName);
	};

	return (
		<section className="container-crew-page">
			<div className="container-crew-content">
				<header className="title-header">
					<h5 className="number-title">02</h5>
					<h5>MEET YOUR CREW</h5>
				</header>
				<main className="container-main-section">
					<h4 className="member-role">{crewMember?.role}</h4>
					<h3 className="member-name">{crewMember?.name}</h3>
					<p className="member-description">{crewMember?.bio}</p>
					<div className="contianer-statistics">
						<MemberSelector handleSelectCrewMember={handleSelectCrewMember} memberSelected={memberSelected} />
					</div>
				</main>
				<div className="img-member-container">
					<picture className="img-picture">
						<source srcSet={crewMember?.images.webp} type="image/webp" />
						<source srcSet={crewMember?.images.png} type="image/png" />
						<img src={crewMember?.images.png} alt="Descripción de la imagen" />
					</picture>
				</div>
			</div>
		</section>
	);
};

export default CrewPage;
