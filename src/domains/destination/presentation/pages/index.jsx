import React, { useEffect, useState } from 'react';
import './DestinationPage.scss';
import { useSelector } from 'react-redux';
import { getDestination } from '../../../../shared/application/selectors/app';
import Separator from '../../../../shared/presentation/components/Separator/Separator';
import DestinationSelector from '../components/DestinationSelector/DestinationSelector';

const DestinationPage = () => {
	const [destinationSelected, setdestinationSelected] = useState('Moon');
	const destination = useSelector(getDestination(destinationSelected));
	const [animate, setAnimate] = useState(false);

	const handleSelectDestination = (destinationValue) => {
		setdestinationSelected(destinationValue);
	};

	useEffect(() => {
		setAnimate(true); // Activa la animación
		const timeout = setTimeout(() => setAnimate(false), 600); // Duración de la animación (0.6s)
		return () => clearTimeout(timeout); // Limpia el timeout
	}, [destinationSelected]);

	return (
		<section className="container-destination-page">
			<div className="container-destination-content">
				<header className="title-header">
					<h5 className="number-title">01</h5>
					<h5>PICK YOUR DESTINATION</h5>
				</header>
				<div className="img-destination-container">
					<picture className="img-picture">
						<source srcSet={destination?.images.webp} type="image/webp" />
						<source srcSet={destination?.images.png} type="image/png" />
						<img
							src={destination?.images.png}
							alt="Descripción de la imagen"
							className={animate ? 'slide-in-blurred-top' : ''}
						/>
					</picture>
				</div>
				<main className="container-main-section">
					<DestinationSelector handleSelectDestination={handleSelectDestination} destinationSelected={destinationSelected} />
					<h2 className="destination-title">{destination?.name}</h2>
					<p className="destination-description">{destination?.description}</p>
					<Separator />
					<div className="contianer-statistics">
						<div className="statistic">
							<p className="subheading-S">AVG. DISTANCE</p>
							<p className="subheading-L">{destination?.distance}</p>
						</div>
						<div className="statistic">
							<p className="subheading-S">EST. TRAVEL TIME</p>
							<p className="subheading-L">{destination?.travel}</p>
						</div>
					</div>
				</main>
			</div>
		</section>
	);
};

export default DestinationPage;
