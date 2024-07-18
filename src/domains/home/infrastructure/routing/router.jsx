import AdminLayout from '../../../../shared/presentation/layouts/AdminLayout';
import HomePage from '../../presentation/pages';
import { homeRoute } from '../../../../shared/infrastructure/routing/routes';
import { UnauthenticatedRoute } from '../../../../shared/presentation/redirect-route';

const homeRouter = {
	layout: AdminLayout,
	router: [
		{
			path: homeRoute,
			page: HomePage,
			routeComponent: UnauthenticatedRoute,
		},
	],
};

export default homeRouter;
