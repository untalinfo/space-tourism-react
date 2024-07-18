import AdminLayout from '../../../../shared/presentation/layouts/AdminLayout';
import { UnauthenticatedRoute } from '../../../../shared/presentation/redirect-route';
import { technologyRoute } from './routes';
import TechnologyPage from '../../presentation/pages';

const crewRouter = {
	layout: AdminLayout,
	router: [
		{
			path: technologyRoute,
			page: TechnologyPage,
			routeComponent: UnauthenticatedRoute,
		},
	],
};

export default crewRouter;
