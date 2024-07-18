import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Router from './shared/presentation/Router';
import { fetchDataSpace } from './shared/application/slices/app';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchDataSpace());
	}, [dispatch]);

	return <Router />;
};

export default App;
