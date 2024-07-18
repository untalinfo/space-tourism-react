import AdminLayout from '../../../../shared/presentation/layouts/AdminLayout';
import { UnauthenticatedRoute } from '../../../../shared/presentation/redirect-route';
import { destinationRoute } from './routes';
import DestinationPage from '../../presentation/pages';

const destinationRouter = {
	layout: AdminLayout,
	router: [
		{
			path: destinationRoute,
			page: DestinationPage,
			routeComponent: UnauthenticatedRoute,
		},
	],
};

export default destinationRouter;
