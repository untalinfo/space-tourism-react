import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '../../../application/constants/app';
import './MobileSideMenu.scss';

const MobileSideMenu = ({ isOpen, toggleMenu, currentPath }) => {
	return (
		<div className={`mobile-side-menu ${isOpen && 'show-menu'}`}>
			<img src="../../../../../public/assets/shared/icon-close.svg" alt="" onClick={toggleMenu} className="btn-close" />
			<nav className="menu">
				{MENU_ITEMS.map((item, index) => {
					return (
						<Link key={index} to={item.path} className={`menu-link nav-text ${item.path === currentPath && 'current-path'}`}>
							{item.label}
						</Link>
					);
				})}
			</nav>
		</div>
	);
};

MobileSideMenu.propTypes = {
	isOpen: PropTypes.bool,
	toggleMenu: PropTypes.func,
	currentPath: PropTypes.string,
};

export default MobileSideMenu;
