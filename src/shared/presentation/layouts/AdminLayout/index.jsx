import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import './AdminLayout.scss';
import { Link, useLocation } from 'react-router-dom';
import { homeRoute } from '../../../infrastructure/routing/routes';
import { MENU_ITEMS, PAGE_BACKGROUNDS } from '../../../application/constants/app';
import MobileSideMenu from '../../components/MobileSideMenu/MobileSideMenu';

const AdminLayout = ({ children }) => {
	const [isOpeneMenuMobile, setisOpeneMenuMobile] = useState(false);
	const location = useLocation();
	const [backgroundImages, setBackgroundImages] = useState({});
	const currentPath = location.pathname;

	const handleToogleMenu = () => {
		setisOpeneMenuMobile(!isOpeneMenuMobile);
	};

	useEffect(() => {
		const backgrounds = PAGE_BACKGROUNDS[currentPath] || {};
		setBackgroundImages(backgrounds);
	}, [currentPath, location.pathname]);

	return (
		<div className="contianer-admin-layout">
			<picture className="picture-bg">
				<source media="(min-width: 1024px)" srcSet={backgroundImages.desktop} />
				<source media="(min-width: 768px)" srcSet={backgroundImages.tablet} />
				<img src={backgroundImages.mobile} alt="Background" />
			</picture>
			<header className="header-admin-layout">
				<Link to={homeRoute}>
					<img src="/assets/shared/logo.svg" alt="page logo" className="logo-icon" />
				</Link>
				<div onClick={handleToogleMenu} className="hamburguer-menu">
					<img src="/assets/shared/icon-hamburger.svg" alt="" />
				</div>
				<MobileSideMenu isOpen={isOpeneMenuMobile} toggleMenu={handleToogleMenu} currentPath={currentPath} />
				<nav className="menu">
					{MENU_ITEMS.map((item, index) => {
						return (
							<Link key={index} to={item.path} className={`menu-link nav-text ${item.path === currentPath && 'current-path'}`}>
								{item.label}
							</Link>
						);
					})}
				</nav>
			</header>
			<main>{children}</main>
		</div>
	);
};

AdminLayout.propTypes = {
	children: PropTypes.node,
};

export default AdminLayout;
