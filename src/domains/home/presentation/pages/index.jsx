import React from 'react';
import './HomePage.scss';
import ExploreButton from '../../../../shared/presentation/components/ExploreButton/ExploreButton';
import { history } from '../../../../shared/application/helpers/history';

const HomePage = () => {
	const handleExplore = () => {
		history.push();
	};
	return (
		<section className="container-home-page">
			<div className="hero">
				<div className="container-texts">
					<h5>SO, YOU WANT TO TRAVEL TO</h5>
					<h1>SPACE</h1>
					<p className="text-description">
						Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on
						the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
					</p>
				</div>
				<div className="container-button">
					<ExploreButton handleClick={handleExplore} />
				</div>
			</div>
		</section>
	);
};

export default HomePage;
