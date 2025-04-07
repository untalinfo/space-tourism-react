import React from 'react';
import { homeRoute } from '../../infrastructure/routing/routes';
import { destinationRoute } from '../../../domains/destination/infrastructure/routing/routes';
import { crewRoute } from '../../../domains/crew/infrastructure/routing/routes';
import { technologyRoute } from '../../../domains/technology/infrastructure/routing/routes';

export const MENU_ITEMS = [
	{
		label: (
			<>
				<b>00</b> <p className="nav-text">HOME</p>
			</>
		),
		path: homeRoute,
	},
	{
		label: (
			<>
				<b>01</b> <p className="nav-text">DESTINATION</p>
			</>
		),
		path: destinationRoute,
	},
	{
		label: (
			<>
				<b>02</b> <p className="nav-text">CREW</p>
			</>
		),
		path: crewRoute,
	},
	{
		label: (
			<>
				<b>03</b> <p className="nav-text">TECHNOLOGY</p>
			</>
		),
		path: technologyRoute,
	},
];

export const PAGE_BACKGROUNDS = {
	[homeRoute]: {
		mobile: '/assets/home/background-home-mobile.jpg',
		tablet: '/assets/home/background-home-tablet.jpg',
		desktop: '/assets/home/background-home-desktop.jpg',
	},
	[destinationRoute]: {
		mobile: '../../../../public/assets/destination/background-destination-mobile.jpg',
		tablet: '../../../../public/assets/destination/background-destination-tablet.jpg',
		desktop: '../../../../public/assets/destination/background-destination-desktop.jpg',
	},
	[crewRoute]: {
		mobile: '../../../../public/assets/crew/background-crew-mobile.jpg',
		tablet: '../../../../public/assets/crew/background-crew-tablet.jpg',
		desktop: '../../../../public/assets/crew/background-crew-desktop.jpg',
	},
	[technologyRoute]: {
		mobile: '../../../../public/assets/technology/background-technology-mobile.jpg',
		tablet: '../../../../public/assets/technology/background-technology-tablet.jpg',
		desktop: '../../../../public/assets/technology/background-technology-desktop.jpg',
	},
};

export default { MENU_ITEMS };
