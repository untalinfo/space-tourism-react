import React from 'react';
import { homeRoute } from '../../infrastructure/routing/routes';

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
		path: '/example',
	},
	{
		label: (
			<>
				<b>02</b> <p className="nav-text">CREW</p>
			</>
		),
		path: '/example-public',
	},
	{
		label: (
			<>
				<b>03</b> <p className="nav-text">TECHNOLOGY</p>
			</>
		),
		path: '/example-public',
	},
];

export const PAGE_BACKGROUNDS = {
	[homeRoute]: {
		mobile: '../../../../public/assets/home/background-home-mobile.jpg',
		tablet: '../../../../public/assets/home/background-home-tablet.jpg',
		desktop: '../../../../public/assets/home/background-home-desktop.jpg',
	},
};

export default { MENU_ITEMS };
