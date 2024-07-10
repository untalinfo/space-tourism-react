import AdminLayout from '../../../../shared/presentation/layouts/AdminLayout';
import { UnauthenticatedRoute } from '../../../../shared/presentation/redirect-route';
import { crewRoute } from './routes';
import CrewPage from '../../presentation/pages';

const crewRouter = {
	layout: AdminLayout,
	router: [
		{
			path: crewRoute,
			page: CrewPage,
			routeComponent: UnauthenticatedRoute,
		},
	],
};

export default crewRouter;
