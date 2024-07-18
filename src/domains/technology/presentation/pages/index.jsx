import React, { useState } from 'react';
import './TechnologyPage.scss';
import { useSelector } from 'react-redux';
import { getTechnology } from '../../../../shared/application/selectors/app';
import TechnologySelector from '../components/TechnologySelector/TechnologySelector';

const TechnologyPage = () => {
	const [technologySelected, setTechnologySelected] = useState('Launch vehicle');
	const technology = useSelector(getTechnology(technologySelected));

	const handleSelectTechnology = (memberName) => {
		setTechnologySelected(memberName);
	};

	return (
		<section className="container-technology-page">
			<div className="container-technology-content">
				<header className="title-header">
					<h5 className="number-title">03</h5>
					<h5>SPACE LAUNCH 101</h5>
				</header>
				<div className="img-technology-container">
					<picture className="img-picture">
						<source srcSet={technology?.images.portrait} type="image/webp" media="(min-width: 1024px)" />
						<source
							srcSet={technology?.images.landscape}
							type="image/png"
							media="(min-width: 768px) and (max-width: 992px)"
						/>
						<img src={technology?.images.portrait} alt="Descripción de la imagen" />
					</picture>
				</div>
				<main className="container-main-section">
					<div className="contianer-selector">
						<TechnologySelector handleSelectTechnology={handleSelectTechnology} technologySelected={technologySelected} />
					</div>
					<div className="container-text">
						<h4 className="title">THE TERMINOLOGY…</h4>
						<h3 className="technology-name">{technology?.name}</h3>
						<p className="technology-description">{technology?.description}</p>
					</div>
				</main>
			</div>
		</section>
	);
};

export default TechnologyPage;
