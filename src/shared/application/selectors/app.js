import { createSelector } from '@reduxjs/toolkit';

export const spaceState = (state) => state.data_space;

export const getDestinations = createSelector(spaceState, (data_space) => {
	const { destinations } = data_space;
	return destinations;
});
export const getCrew = createSelector(spaceState, (data_space) => {
	const { crew } = data_space;
	return crew;
});
export const getTechnology = createSelector(spaceState, (data_space) => {
	const { technology } = data_space;
	return technology;
});
